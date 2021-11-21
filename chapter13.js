// Turn this object into a constructor, plants can be an empty object 
var garden = {
    length: 20,
    width: 10,
    organic : true,
    fertilizer: "manure",
    plants:{
        lettuce: 20,
        tomatoes: 6,
        carrots: 30
    }
};


function Garden (lgt, wdt, org, fert) {
    this.length = lgt;
    this.width = wdt;
    this.organic = org;
    this.fertilizer = fert;
    this.plants = {};
    
}

//rewrite the following method as a component of a protoype, then use Oject.create () to create a version of the
//garden object using this prototype

var totalPlants = 0;

//For every property (which we are calling plant) 
//in the object literal garden --> plants (name) property
for (var plant in garden.plants){
    //Add the value of the plant to total plants
    totalPlants += plant;
}

var gardenMethods = {
    totalPlants: function (){
        for (var plant in garden.plants){
            //Add the value of the plant to total plants
            totalPlants += plant;
        }
        return totalPlants;
    }
};

var garden2 = Object.create(gardenMethods);

//write a class Garden that encapsulates the constructor 

class Garden {
    constructor(lgt, wdt, org, fert) {
        this.length = lgt;
        this.width = wdt;
        this.organic = org;
        this.fertilizer = fert;
        this.plants = {};
    }
}

//Modify your prototype so the method is now an accessor (a getter)


var gardenMethods = {
     get totalPlants(){
        for (var plant in garden.plants){
            //Add the value of the plant to total plants
            totalPlants += plant;
        }
        return totalPlants;
    }
};




