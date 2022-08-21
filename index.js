const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

// Code your solution here
//sum all the assembled batteries
let totalBatteries = batteryBatches.reduce((batteryAmount, assembledBatteries)=> { return batteryAmount + assembledBatteries})

