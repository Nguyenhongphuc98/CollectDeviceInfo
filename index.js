var os = require('os');
const util = require('util');
const exec = util.promisify(require('child_process').exec);

Exe('ioreg -c IOPlatformExpertDevice -d 2', r => {
    const c = r.replace(/(^[ \t]*\n)/gm, "");
    const rows = c.split("\n");

    // const software = {
    //     'item': 'Software',
    //     'systemVersion': rows[2].split(": ")[1].trim(),
    //     'kernelVersion': rows[3].split(":")[1].trim(),
    //     'bootVolume': rows[4].split(": ")[1].trim(),
    //     'computerName': rows[6].split(": ")[1].trim(),
    //     'userName': rows[7].split(": ")[1].trim(),
    //     'timeSinceBoot': rows[10].split(": ")[1].trim()
    // };
    // console.log(software);
    // const t = " IOBusyInterest = IOCommand is not serializable";
    // console.log(t)
    // console.log(getValue(t, 'IOBusyInterest', '=', true));
    console.log(getValue(rows, '"IOBusyInterest', '=', true));
})

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

// Excute cmd
// -n : Use this option to disable printing of the key name when printing values.
function Exe(cmd, callback) {
    exec(cmd)
        .then((r) => {
            if (r.stderr) {
                console.log('err occur:' + r.stderr);
            }
            callback(r.stdout);
        })
}