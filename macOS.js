var os = require('os');
const util = require('util');
const exec = util.promisify(require('child_process').exec);

// 1. Get computer name
console.log('computer-name: ' + os.hostname());

// 2. Get model name
Exe('sysctl -n hw.model', modelName => {
    console.log('model-name: ' + modelName);
})

// 3. Get CPU info
Exe('sysctl -n machdep.cpu.brand_string', cpu => {
    console.log('cpu: ' + cpu);
})

// 4. User name
console.log('userName: ' + os.userInfo().username);

// 5. Thread count
Exe('sysctl -n machdep.cpu.thread_count', numthreads => {
    console.log('total-thread: ' + numthreads);
})

// 6. Li caches per core
Exe('sysctl -n hw.l2cachesize', mem => {
    console.log('L2: ' + mem + 'bytes');
})
Exe('sysctl -n hw.l2cachesize', mem => {
    console.log('L3: ' + mem + 'bytes');
})

// 7. Memory
Exe('sysctl -n hw.memsize', mem => {
    console.log('memory: ' + mem + 'bytes');
})

// 8. Camera
Exe('system_profiler SPCameraDataType', rows => {
    // const c = r.replace(/(^[ \t]*\n)/gm, "");
    // const rows = c.split("\n");
    
    const camera = {
        'item': 'Camera',
        'name': rows[1].trim().slice(0, -1),
        'modelID': rows[2].split(":")[1].trim(),
        'uniqueID': rows[3].split(":")[1].trim()
    };
    console.log(camera);
})

// 9. Apple pay
Exe('system_profiler SPSecureElementDataType', rows => {
    // const c = r.replace(/(^[ \t]*\n)/gm, "");
    // const rows = c.split("\n");

    const applePay = {
        'item': 'ApplePay',
        'platformID': rows[2].split(":")[1].trim(),
        'serialNumber': rows[3].split(":")[1].trim()
    };
    console.log(applePay);
})

// 10. Bluetooth
Exe('system_profiler SPBluetoothDataType', rows => {
    // const c = r.replace(/(^[ \t]*\n)/gm, "");
    // const rows = c.split("\n");

    const bluetooth = {
        'item': 'bluetooth',
        'version': rows[1].split(":")[1].trim(),
        'adress': rows[3].split(":")[1].trim()
    };
    console.log(bluetooth);
})

// 11. Ethernet
Exe('system_profiler SPEthernetDataType', rows => {
    // const c = r.replace(/(^[ \t]*\n)/gm, "");
    // const rows = c.split("\n");

    const ethernet = {
        'item': 'Ethenet',
        'version': rows[6].split(":")[1].trim(),
        'macAdress': rows[7].split(": ")[1].trim()
    };
    console.log(ethernet);
})

// 12. Graphics
Exe('system_profiler SPDisplaysDataType', rows => {
    // const c = r.replace(/(^[ \t]*\n)/gm, "");
    // const rows = c.split("\n");

    const graphics = {
        'item': 'graphics',
        'chipsetModel': rows[2].split(":")[1].trim(),
        'type': rows[3].split(": ")[1].trim(),
        'deviceID': rows[7].split(": ")[1].trim()
    };
    console.log(graphics);
})

// 13. Hardware
Exe('system_profiler SPHardwareDataType', rows => {
    // const c = r.replace(/(^[ \t]*\n)/gm, "");
    // const rows = c.split("\n");

    const hardware = {
        'item': 'hardware',
        'modelName': rows[2].split(":")[1].trim(),
        'modelIdentifier': rows[3].split(": ")[1].trim(),
        'processerName': rows[4].split(": ")[1].trim(),
        'processerSpeed': rows[5].split(": ")[1].trim(),
        'numProcesser': rows[6].split(": ")[1].trim(),
        'totalCore': rows[7].split(": ")[1].trim(),
        'l1Cache': rows[8].split(": ")[1].trim(),
        'l2Cache': rows[9].split(": ")[1].trim(),
        'memory': rows[11].split(": ")[1].trim(),
        'serialNumber': rows[13].split(": ")[1].trim(),
        'hardWareUUID': rows[14].split(": ")[1].trim()
    };
    console.log(hardware);
})

// 14. Wifi
Exe('system_profiler SPNetworkLocationDataType', rows => {
    // const c = r.replace(/(^[ \t]*\n)/gm, "");
    // const rows = c.split("\n");

    const wifi = {
        'item': 'wifi',
        'type': rows[5].split(":")[1].trim(),
        'macAdress': rows[7].split(": ")[1].trim(),
    };
    console.log(wifi);
})

// 15. Power
Exe('system_profiler SPPowerDataType', rows => {
    const power = {
        'item': 'power',
        'serialNumber': rows[3].split(":")[1].trim(),
        'manufactuter': rows[4].split(": ")[1].trim(),
        'deviceName': rows[5].split(": ")[1].trim()
    };
    console.log(power);
})

// Excute cmd
// -n : Use this option to disable printing of the key name when printing values.
function Exe(cmd, callback) {
    exec(cmd)
        .then((r) => {
            // if (r.stderr) {
            //     console.log('err occur:' + r.stderr);
            // }
            const filtered = r.stdout.replace(/(^[ \t]*\n)/gm, "");
            const rows = filtered.split("\n");
            callback(rows);
        })
}

//Boot ROM Version:
//Serial Number (system):