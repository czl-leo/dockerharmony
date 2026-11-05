import fileIo from '@ohos.file.fs';
const CHUNK_BYTES = 64 * 1024;
/**
 * A file-backed, replayable body for OpenHarmony. Each `source()` opens a fresh `@ohos.file.fs` handle
 * over the byte range `[offset, offset + length)` and walks it in `CHUNK_BYTES` reads. A cursor read to
 * `null` closes its handle; one abandoned earlier is closed by `cancel`.
 */
export class FileContent {
    constructor(path, offset, length) {
        this.oneShot = false;
        this.path = path;
        this.offset = offset;
        this.length = length;
    }
    source() {
        const path = this.path;
        const end = this.offset + this.length;
        let pos = this.offset;
        let file;
        const closeIfOpen = async () => {
            if (file !== undefined) {
                const handle = file;
                file = undefined;
                await fileIo.close(handle);
            }
        };
        return {
            async read() {
                if (pos >= end) {
                    await closeIfOpen();
                    return null;
                }
                if (file === undefined)
                    file = await fileIo.open(path, fileIo.OpenMode.READ_ONLY);
                const want = Math.min(CHUNK_BYTES, end - pos);
                const buffer = new ArrayBuffer(want);
                const read = await fileIo.read(file.fd, buffer, { offset: pos, length: want });
                if (read <= 0) {
                    // Stop when the file ends before the declared range.
                    await closeIfOpen();
                    return null;
                }
                pos += read;
                return new Uint8Array(buffer, 0, read);
            },
            // Closes the handle when a drain is abandoned mid-file.
            async cancel() {
                await closeIfOpen();
            },
        };
    }
}
/**
 * Builds a `FileContent`, stat-ing the file to learn the length when one is not given. `offset`
 * defaults to the start, `length` to the rest of the file from `offset`.
 */
export async function fileBody(path, options) {
    const offset = options?.offset ?? 0;
    let length = options?.length;
    if (length === undefined) {
        const size = (await fileIo.stat(path)).size;
        length = Math.max(0, size - offset);
    }
    return new FileContent(path, offset, length);
}
//# sourceMappingURL=file-content.js.map