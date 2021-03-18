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

// 4. Get num of processer
// Exe('sysctl -n machdep.cpu.brand_string', modelName => {
//     console.log('cpu: ' + modelName);
// })
// 5. Total cores
Exe('sysctl -n machdep.cpu.core_count', numCores => {
    console.log('total-cores: ' + numCores);
})

// 6. Thread count
Exe('sysctl -n machdep.cpu.thread_count', numthreads => {
    console.log('total-thread: ' + numthreads);
})

// 7. Li caches per core
Exe('sysctl -n hw.l2cachesize', mem => {
    console.log('L2: ' + mem + 'bytes');
})
Exe('sysctl -n hw.l2cachesize', mem => {
    console.log('L3: ' + mem + 'bytes');
})

// 8. Memory
Exe('sysctl -n hw.memsize', mem => {
    console.log('memory: ' + mem + 'bytes');
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

//Boot ROM Version:
//Serial Number (system):