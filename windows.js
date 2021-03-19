//Get computer name
console.log(process.env['COMPUTERNAME']);

//wmic.exe cpu get /value'
// Caption=Intel64 Family 6 Model 63 Stepping 2 => count processer = num line start with Caption

//Description=Intel64 Family 6 Model 63 Stepping 2
// family: 6
// model: 63
// steping 2
DeviceID=CPU0

//L2CacheSize=
L2CacheSpeed=
//L3CacheSize=0
L3CacheSpeed=0

// Manufacturer=GenuineIntel
// Max speed: MaxClockSpeed=2400
// brand Name: Intel(R) Xeon(R) CPU E5-2676 v3
// speed: 2.40GHz
// NumberOfCores=1 => physical
NumberOfEnabledCore=108 ??
//NumberOfLogicalProcessors=1 => num threads = cores ao?= luong
// if processer >1 => cores = processer * numthread
//   => physical cores =physic * processer

ProcessorId=1789FBFF000306F2
ProcessorType=3
// Revision=16130
Role=CPU

SerialNumber=

SystemName=EC2AMAZ-9JRLFG5
UniqueId=
// UpgradeMethod=1 => socket type base on id


// Bluetooth
wmic.exe path Win32_PNPEntity get /value // :((

//BIOS
wmic.exe bios get Version, SerialNumber, SMBIOSBIOSVersion
//SerialNumber                          SMBIOSBIOSVersion  Version
//ec2eb73a-13df-299f-812e-2b7337673a8c  4.2.amazon         Xen - 0

// Battery
wmic.exe Path Win32_Battery Get BatteryStatus, DesignCapacity, EstimatedChargeRemaining, DesignVoltage, FullChargeCapacity /value
no instance available

// Graphics