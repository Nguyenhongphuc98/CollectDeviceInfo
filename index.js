var os = require('os');
const util = require('util');
const exec = util.promisify(require('child_process').exec);





Exe('system_profiler SPNVMeDataType', r => {
    const c = r.replace(/(^[ \t]*\n)/gm, "");
    const rows = c.split("\n");

    const hardware = {
        'item': 'Disk',
        'capacity': rows[3].split(": ")[1].trim(),
        'model': rows[5].split(":")[1].trim(),
        'serialNumber': rows[7].split(": ")[1].trim(),
        'volumeUUID': rows[21].split(": ")[1].trim()
    };
    console.log(hardware);
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