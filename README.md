<div align="center">
<p>English | <a href="README.zh-CN.md">简体中文</a></p>
</div>

# DockerHarmony
Because the userland of OpenHarmony can run on the Linux kernel, containerization of OpenHarmony is feasible.

This project has turned OpenHarmony's mini rootfs into a Docker container image, which allows us to use Linux servers instead of physical OpenHarmony devices to run and test our command-line programs.

## Supported architectures
arm64 only

## Usage
Pull from Docker Hub and run
```sh
docker pull hqzing/dockerharmony:latest
docker run -itd --name=ohos hqzing/dockerharmony:latest
docker exec -it ohos sh
```

Pull from GitHub Container Registry and run
```sh
docker pull ghcr.io/hqzing/dockerharmony:latest
docker run -itd --name=ohos ghcr.io/hqzing/dockerharmony:latest
docker exec -it ohos sh
```

Available tags
| Tag     | Description                                                             |
|---------|-------------------------------------------------------------------------|
| latest  | The latest release (currently equivalent to 7.0).                       |
| 7.0     | An image based on OpenHarmony 7.0 Release.                              |
| 6.1     | An image based on OpenHarmony 6.1 Release.                              |
| 6.0     | An image based on OpenHarmony 6.0 Release.                              |
| main    | The mainline version, built using the latest build scripts from the main branch of this repository. |

## Need more software?
The OpenHarmony root filesystem (rootfs) is composed of three main components: [musl libc](https://musl.libc.org), [toybox](https://landley.net/toybox), and [mksh](https://github.com/MirBSD/mksh). Command-line utilities are provided by `toybox`, which offers only a minimal set of tools.

Since OpenHarmony currently does not include a package manager, additional software cannot be installed using a single command.

For convenience, `curl` is pre-installed in the container image, allowing users to download additional software manually.

A lot of software compiled for the aarch64-linux-musl platform can run in this container. For example, `make` from the Alpine Linux package repository is compatible:

```sh
package_name="make"
alpine_repository="http://dl-cdn.alpinelinux.org/alpine/v3.22/main/aarch64"
curl -fsSL ${alpine_repository}/APKINDEX.tar.gz | tar -zx -C /tmp
package_version=$(grep -A1 "^P:${package_name}$" /tmp/APKINDEX | sed -n "s/^V://p")
apk_file_name=${package_name}-${package_version}.apk
curl -L -O ${alpine_repository}/${apk_file_name}
tar -zxf ${apk_file_name} -C /

# You can now use the 'make' command.
```

Alternatively, you can use third-party package managers to install software, such as [Harmonybrew](https://atomgit.com/Harmonybrew).

## Use in GitHub workflow

To use this image in GitHub workflow, you first need to use an arm64 runner. GitHub provides arm64 [runner images](https://github.com/actions/runner-images) that we can use for free.

It should be noted that many preconfigured workflows on GitHub (such as actions/checkout) depend on the Node.js runtime environment. We need to make some special preparations for them.

```yml
jobs:
  buid:
    name: build
    runs-on: ubuntu-24.04-arm
    container:
      image: hqzing/dockerharmony:latest
      volumes:
        - /opt/node24:/__e/node24:rw,rshared
    steps:
      - name: Setup node for actions
        run: |
          curl -L -O https://github.com/hqzing/ohos-node/releases/download/v24.2.0/node-v24.2.0-openharmony-arm64.tar.gz
          mkdir /__e/node24/bin
          tar -zxf node-v24.2.0-openharmony-arm64.tar.gz -C /opt
          ln -s /opt/node-v24.2.0-openharmony-arm64/bin/node /__e/node24/bin/node
      - name: Checkout
        uses: actions/checkout@v5
      # Do your work...
```

## Build image from source

Environment Requirements:
- Ubuntu 22.04 x64 (24.04 is not supported)
- At least 250GB of available disk space (`build-components.sh` download and extract 71GB of source archives)
- A network environment that allows seamless access to GitHub (`build-curl.sh` needs to download source from GitHub)
- Docker installed

Install the dependencies:
```sh
sudo apt update
sudo apt install -y \
    bison ccache default-jdk flex gcc-arm-linux-gnueabi gcc-arm-none-eabi \
    genext2fs liblz4-tool libssl-dev libtinfo5 libtool mtd-utils mtools \
    openssl patchelf pkg-config python-is-python3 ruby scons u-boot-tools \
    unzip zip aria2 cmake autoconf git patch
```

Build the image:
```sh
git clone https://github.com/hqzing/dockerharmony.git
cd dockerharmony
./build-components.sh
./build-curl.sh
./build-rootfs.sh
DOCKER_BUILDKIT=1 docker buildx build --platform linux/arm64 -t dockerharmony:latest .
```

Since the build machine is x64-based while the container is arm64-based, you cannot run the container directly on the build machine.

If you want to run this container on the build machine, you need to install QEMU and register the executable types on the host OS.

Use the `tonistiigi/binfmt` image to install QEMU and register the executable types on the host with a single command:

```sh
docker run --privileged --rm tonistiigi/binfmt --install all
```

Now you can run arm64 containers on the x64 host:

```sh
docker run --name=ohos -itd --platform linux/arm64 dockerharmony:latest
```

Since software emulation is much slower than native arm64 hardware, this method is only suitable for quick verification, not for daily work.
