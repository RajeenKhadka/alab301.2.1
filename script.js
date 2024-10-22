const radius = 5;
const PI = 3.1415;
const spacePerPlant = 0.8;
const startingPlant = 20;

const area = PI * radius * radius

console.log(area);

let startingWeekArea = area * startingPlant;

//console.log(startingWeekArea);

console.log("Week-1");
    //Predict the plant growth after a specific number of weeks.
    let weekNum1 = 1;
    let noOfPlants = weekNum1 * (startingPlant * 2);
    console.log(noOfPlants);

    let requiredSpace1 = noOfPlants * spacePerPlant;
    console.log(requiredSpace1, "meter square");

    let areaCoveredWeek1 = ((requiredSpace1/area) * 100);
    console.log(areaCoveredWeek1.toFixed(2), "%");

    if(areaCoveredWeek1 > 80){
        console.log("Pruned");
    } else if((areaCoveredWeek1 >= 50) && (areaCoveredWeek1 <= 80)){
        console.log("Monitored");
    } else{
        console.log("Planted");
    }

    








