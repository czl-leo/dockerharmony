import fs from 'node:fs';
import path from 'node:path';

const root = process.argv[2];
if (!root) {
  console.error('usage: patch-hvigor-local-test.mjs <command-line-tools>');
  process.exit(1);
}

function find(dir, name) {
  const hit = [];
  const walk = (current) => {
    let entries = [];
    try {
      entries = fs.readdirSync(current, { withFileTypes: true });
    } catch {
      return;
    }
    for (const entry of entries) {
      const full = path.join(current, entry.name);
      if (entry.isDirectory()) {
        walk(full);
      } else if (entry.name === name && full.includes(`${path.sep}localTest${path.sep}`)) {
        hit.push(full);
      }
    }
  };
  walk(dir);
  return hit;
}

function replaceOnce(file, from, to, label, all = false) {
  const source = fs.readFileSync(file, 'utf8');
  if (!source.includes(from)) {
    if (source.includes(to)) {
      console.log(`already patched ${label}: ${file}`);
      return;
    }
    console.error(`pattern missing for ${label}: ${file}`);
    process.exit(1);
  }
  fs.writeFileSync(file, all ? source.replaceAll(from, to) : source.replace(from, to));
  console.log(`patched ${label}: ${file}`);
}

const previewers = find(root, 'previewer.js');
const ports = find(root, 'portutil.js');
if (previewers.length === 0 || ports.length === 0) {
  console.error(`local test files not found under ${root}`);
  process.exit(1);
}

for (const file of previewers) {
  replaceOnce(
    file,
    "else if (process.platform === 'darwin' || process.platform === 'linux')",
    "else if (process.platform !== 'win32')",
    'previewer platform',
  );
  replaceOnce(
    file,
    '{ windowsHide: true, cwd: previewerFullDir }',
    "{ windowsHide: true, cwd: previewerFullDir, stdio: ['ignore', 'pipe', 'pipe'] }",
    'previewer stdio',
    true,
  );
  replaceOnce(
    file,
    `        child.on('close', () => {
            portSet.delete(portNum);
        });
        child.stdout.on('data', async (data) => {`,
    `        let previewerDone = false;
        const previewerTimer = setTimeout(() => {
            if (previewerDone) {
                return;
            }
            previewerDone = true;
            Logger.error('Previewer produced no test report within 120s');
            child.kill();
            reject(new Error('Previewer produced no test report within 120s'));
        }, 120000);
        child.on('close', (code) => {
            portSet.delete(portNum);
            if (!previewerDone) {
                previewerDone = true;
                clearTimeout(previewerTimer);
                reject(new Error('Previewer exited ' + code + ' without a test report'));
            }
        });
        child.on('error', (err) => {
            if (!previewerDone) {
                previewerDone = true;
                clearTimeout(previewerTimer);
                Logger.error(String(err));
                reject(err);
            }
        });
        if (child.stderr) {
            child.stderr.on('data', (data) => {
                Logger.error(data.toString());
            });
        }
        child.stdout.on('data', async (data) => {`,
    'previewer wait',
  );
  replaceOnce(
    file,
    `            if (!isShouldKillPreviewer(data, Logger)) {
                return;
            }
            child.kill();`,
    `            if (!isShouldKillPreviewer(data, Logger)) {
                return;
            }
            previewerDone = true;
            clearTimeout(previewerTimer);
            child.kill();`,
    'previewer finish',
  );
}

for (const file of ports) {
  replaceOnce(
    file,
    `        const netStat = (0, node_child_process_1.spawnSync)('lsof', [\`-i:\${portNum}\`]);
        if (netStat.stdout.toString().trim()) {`,
    `        const netStat = (0, node_child_process_1.spawnSync)('lsof', [\`-i:\${portNum}\`]);
        if (netStat.error || !netStat.stdout) {
            portSet.add(portNum);
            return portNum;
        }
        if (netStat.stdout.toString().trim()) {`,
    'port check',
  );
}
