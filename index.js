var os = require('os');
const util = require('util');
const exec = util.promisify(require('child_process').exec);


console.log(os.userInfo().username);


// Exe('system_profiler SPHardwareDataType', r => {
//     const c = r.replace(/(^[ \t]*\n)/gm, "");
//     const rows = c.split("\n");

//     const hardware = {
//         'item': 'hardware',
//         'modelName': rows[2].split(":")[1].trim(),
//         'modelIdentifier': rows[3].split(": ")[1].trim(),
//         'processerName': rows[4].split(": ")[1].trim(),
//         'processerSpeed': rows[5].split(": ")[1].trim(),
//         'numProcesser': rows[6].split(": ")[1].trim(),
//         'totalCore': rows[7].split(": ")[1].trim(),
//         'l1Cache': rows[8].split(": ")[1].trim(),
//         'l2Cache': rows[9].split(": ")[1].trim(),
//         'memory': rows[11].split(": ")[1].trim(),
//         'serialNumber': rows[13].split(": ")[1].trim(),
//         'hardWareUUID': rows[14].split(": ")[1].trim()
//     };
//     console.log(hardware);
// })


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