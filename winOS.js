const {Wmic} = require('./utils');

Wmic("cpu get /value", rows => {
    console.log(rows);
})