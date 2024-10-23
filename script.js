const radius = 5;
const PI = 3.1415;
const spacePerPlant = 0.8;
const startingPlant = 20;

const area = (PI * radius * radius).toFixed(2);

console.log("");
console.log("==================Part 1=====================");
console.log("#Week-1");

let weekNum1 = 1;
let noOfPlants = weekNum1 * (startingPlant * 2);
let requiredSpace1 = noOfPlants * spacePerPlant;
let areaCoveredWeek1 = ((requiredSpace1 / area) * 100).toFixed(2);

console.log(" - The total number of plants on", weekNum1, "is" ,noOfPlants);
console.log(" - The space required",requiredSpace1, "meter square");
console.log(" - Total area covered in percentage:",areaCoveredWeek1 + "%");

if (areaCoveredWeek1 > 80) {
    console.log(" - Action: Pruned");
} else if ((areaCoveredWeek1 >= 50) && (areaCoveredWeek1 <= 80)) {
    console.log(" - Action: Monitored");
} else {
    console.log(" - Action: Planted");
}

console.log("")

console.log("#Week-2");

let weekNum2 = 2;
let noOfPlants2 = weekNum2 * (startingPlant * 2);
let requiredSpace2 = noOfPlants2 * spacePerPlant;
let areaCoveredWeek2 = ((requiredSpace2 / area) * 100).toFixed(2);

console.log(" - The total number of plants on", weekNum2, "is" ,noOfPlants2);
console.log(" - The space required",requiredSpace2, "meter square");
console.log(" - Total area covered in percentage:",areaCoveredWeek2 + "%");

if (areaCoveredWeek2 > 80) {
    console.log(" - Action: Pruned");
} else if ((areaCoveredWeek2 >= 50) && (areaCoveredWeek2 <= 80)) {
    console.log(" - Action: Monitored");
} else {
    console.log(" - Action: Planted");
}

console.log("")

console.log("#Week-3");

let weekNum3 = 3;
let noOfPlants3 = weekNum3 * (startingPlant * 2);
let requiredSpace3 = noOfPlants3 * spacePerPlant;
let areaCoveredWeek3 = ((requiredSpace3 / area) * 100).toFixed(2);

console.log(" - The total number of plants on", weekNum3, "is" ,noOfPlants3);
console.log(" - The space required",requiredSpace3, "meter square");
console.log(" - Total area covered in percentage:",areaCoveredWeek3 + "%");

if (areaCoveredWeek3 > 80) {
    console.log(" - Action: Pruned");
} else if ((areaCoveredWeek3 >= 50) && (areaCoveredWeek3 <= 80)) {
    console.log(" - Action: Monitored");
} else {
    console.log(" - Action: Planted");
}

console.log("");
console.log("==================Part 2=====================");

let noOfWeek = 10;
let newInitialPlant = 100;
let noofPlantsForWeek10 = noOfWeek *(newInitialPlant * 2);
let newSpaceRequired = noofPlantsForWeek10 * spacePerPlant;

console.log(" - Total number of plants for week 10: ", noofPlantsForWeek10);
//console.log(" - Total area:",area,"meter square");
console.log(" - The space required",newSpaceRequired, "meter square");

let newRadius = Math.sqrt(newSpaceRequired / PI).toFixed(2);
console.log(" - The new radius is:",newRadius);

console.log("");
console.log("==================Part 3=====================");

console.log(" - The original area of the garden is:", area, "meter square");
console.log(" - The new area for 100 plants is:", newSpaceRequired, "meter square");

try {
    if(newSpaceRequired < area){
        console.log(" - The plant count is acceptable.");
    }else{
        throw " - The plant count is too much!"
    }

} catch (error) {
    console.log(error);
}



