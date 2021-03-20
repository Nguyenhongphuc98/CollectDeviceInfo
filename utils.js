const util = require('util');
const exec = util.promisify(require('child_process').exec);

// Mac cmd ====================================
function sysctl(cmd, callback) {
    // -n : Use this option to disable printing of the key name when printing values.
    const fullCmd = 'sysctl -n ' + cmd;
    exe(fullCmd, callback);
}

function profiler(cmd, callback) {
    const fullCmd = 'system_profiler ' + cmd;
    exe(fullCmd, callback);
}

// Win cmd ====================================
function wmic(cmd, callback) {
    const fullCmd = 'wmic ' + cmd;
    exe(fullCmd, callback);
}

// Excute cmd
function exe(cmd, callback) {
    exec(cmd)
        .then((r) => {
            // if (r.stderr) {
            //     console.log('err occur:' + r.stderr);
            // }

            // Clear unnecessary character
            const filtered = r.stdout.replace(/(^[ \t]*\n)/gm, "");
            const rows = filtered.split("\n");
            callback(rows);
        })
}

function getValue(lines, property, separator, trimmed) {
    separator = separator || ':';
    property = property.toLowerCase();
    trimmed = trimmed || false;
    for (let i = 0; i < lines.length; i++) {
      let line = lines[i].toLowerCase().replace(/\t/g, '');
      if (trimmed) {
        line = line.trim();
      }
      if (line.startsWith(property)) {
        const parts = trimmed ? lines[i].trim().split(separator) : lines[i].split(separator);
        if (parts.length >= 2) {
          parts.shift();
          return parts.join(separator).trim();
        } else {
          return '';
        }
      }
    }
    return '';
  }

module.exports = {sysctl, profiler, wmic, getValue};