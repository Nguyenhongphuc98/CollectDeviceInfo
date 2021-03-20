const {wmic, getValue} = require('./utils');

wmic("cpu get /value", rows => {
    // this cmd may take to seconds.
	const cpu = {
		'item': 'cpu',
		'description': getValue(rows, 'name', '='),
		'l2cachesize': getValue(rows, 'l2cachesize', '='),
		'l3cachesize': getValue(rows, 'l3cachesize', '='),
		'manufacturer': getValue(rows, 'manufacturer', '='),
		'maxClockSpeed': getValue(rows, 'maxClockSpeed', '='),
		'numberOfCores': getValue(rows, 'numberOfCores', '='),
		'numberOfLogicalProcessers': getValue(rows, 'numberOfLogicalProcessers', '='),
		'processorID': getValue(rows, 'processorID', '='),
		'processorType': getValue(rows, 'processorType', '='),
		'revision': getValue(rows, 'revision', '='),
		'systemName': getValue(rows, 'systemName', '=')
	}
    console.log(cpu);
})