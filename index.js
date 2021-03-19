var os = require('os');
const util = require('util');
const exec = util.promisify(require('child_process').exec);

Exe('system_profiler SPSoftwareDataType', r => {
    const c = r.replace(/(^[ \t]*\n)/gm, "");
    const rows = c.split("\n");

    const software = {
        'item': 'Software',
        'systemVersion': rows[2].split(": ")[1].trim(),
        'kernelVersion': rows[3].split(":")[1].trim(),
        'bootVolume': rows[4].split(": ")[1].trim(),
        'computerName': rows[6].split(": ")[1].trim(),
        'userName': rows[7].split(": ")[1].trim(),
        'timeSinceBoot': rows[10].split(": ")[1].trim()
    };
    console.log(software);
})


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