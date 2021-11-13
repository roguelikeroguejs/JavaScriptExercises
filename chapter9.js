//1 Garden object
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

}
// Write a statement to add a method that returns the total number of plants 
// planned for this garden, use a for...in statement to iterate over the 
//properties of plants

//Create a variable to store total number
var totalPlants = 0;

//For every property (which we are calling plant) 
//in the object literal garden --> plants (name) property
for (var plant in garden.plants){
    //Add the value of the plant to total plants
    totalPlants += plant;
}


//Write code to replace the lettuce plants listed in the garden object with 
// 10 spinach plants 
delete garden.plants.lettuce;
//This adds the property spinach to plants with a value of 10 
garden.plants.spinach = 10;

// Show code to create a Date object for the date and time
// June 5, 2020, 11:15 AM
var myDate = new Date( 2020, 6, 5, 11, 15);

/*Write an object literal for a circle object which includes two properties:
its radius, and a method to compute its area using the rule that area equals
PI times the radius squared.
*/
var circle = {
    radius: 4,
    height: 8,
    width: 8,
    area: function () {
        return (Math.PI * this.radius ** 2);
    }
}


