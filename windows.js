
//Get computer name
console.log(process.env['COMPUTERNAME']);

// 1. CPU ===========================================
//wmic.exe cpu get /value'
// Caption=Intel64 Family 6 Model 63 Stepping 2 => count processer = num line start with Caption

//Description=Intel64 Family 6 Model 63 Stepping 2
// family: 6
// model: 63
// steping 2
DeviceID=CPU0

//L2CacheSize=
//L3CacheSize=0

// Manufacturer=GenuineIntel
// Max speed: MaxClockSpeed=2400
// brand Name: Intel(R) Xeon(R) CPU E5-2676 v3
// speed: 2.40GHz
// NumberOfCores=1 => physical
NumberOfEnabledCore=108 ??
//NumberOfLogicalProcessors=1 => num threads = cores ao?= luong
// if processer >1 => cores = processer * numthread
//   => physical cores =physic * processer

ProcessorId=1789FBFF000306F2 // cpu id
ProcessorType=3
// Revision=16130
Role=CPU
SerialNumber=
SystemName=EC2AMAZ-9JRLFG5
UniqueId=
// UpgradeMethod=1 => socket type base on id


// 2.Bluetooth ===========================================
wmic.exe path Win32_PNPEntity get /value // :((

// 3. BIOS ===========================================
wmic.exe bios get Version, SerialNumber, SMBIOSBIOSVersion
//SerialNumber                          SMBIOSBIOSVersion  Version
//ec2eb73a-13df-299f-812e-2b7337673a8c  4.2.amazon         Xen - 0

// 4. Battery ===========================================
wmic.exe Path Win32_Battery Get BatteryStatus, DesignCapacity, EstimatedChargeRemaining, DesignVoltage, FullChargeCapacity /value
no instance available

// 5. Graphics ===========================================


// 6. Device overview =====================================
systeminfo

Host Name:                 EC2AMAZ-9JRLFG5
OS Name:                   Microsoft Windows Server 2019 Datacenter
OS Version:                10.0.17763 N/A Build 17763
OS Manufacturer:           Microsoft Corporation
OS Configuration:          Standalone Server
OS Build Type:             Multiprocessor Free
Registered Owner:          EC2
Registered Organization:   Amazon.com
Product ID:                00430-00000-00000-AA423
Original Install Date:     3/19/2021, 7:45:51 AM
System Boot Time:          3/20/2021, 2:12:55 AM
System Manufacturer:       Xen
System Model:              HVM domU
System Type:               x64-based PC
Processor(s):              1 Processor(s) Installed.
                           [01]: Intel64 Family 6 Model 63 Stepping 2 GenuineIntel ~2400 Mhz
BIOS Version:              Xen 4.2.amazon, 8/24/2006
Time Zone:                 (UTC) Coordinated Universal Time
Total Physical Memory:     512 MB
Available Physical Memory: 68 MB

// 7. Net work  ===========================================
wmic nicconfig list /format:htable >> c:\nicinfo.html
wmic nic get macaddress
ipconfig /all => get macaddress of ethenet and wifi

// 8. disk (file system)  ===========================================
diskdrive get /value

BytesPerSector=512//
Caption=AWS PVDISK SCSI Disk Device // name
InterfaceType=SCSI //
Manufacturer=(Standard disk drives) // vender
MediaType=Fixed hard disk media
Model=AWS PVDISK SCSI Disk Device
Name=\\.\PHYSICALDRIVE0
PNPDeviceID=SCSI\DISK&amp;VEN_AWS&amp;PROD_PVDISK\000000 // device
SerialNumber=vol08cc6ad9751191b1e // serial
Size=32210196480 // size in bytes
Status=OK //stt
SystemCreationClassName=Win32_ComputerSystem
SystemName=EC2AMAZ-9JRLFG5

//wmic logicaldisk where drivetype=3 get name, freespace, systemname, filesystem, size, volumeserialnumber

// Get harddisk model: powershell -command "Get-PhysicalDisk | Format-List" / actualy got above

// 9. memory  ===========================================
wmic memorychip get devicelocator, manufacturer, partnumber, serialnumber, capacity, speed, memorytype, formfactor
// to get type from id => https://www.windowscentral.com/how-get-full-memory-specs-speed-size-type-part-number-form-factor-windows-10
