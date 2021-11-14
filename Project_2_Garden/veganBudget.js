//Total cost button 
document.getElementById("total_button").addEventListener
    ("click", () => getTotalGardenCost(inputForm));

//garden is an array of arrays 
var garden = [
    ["Carrots", 1, 1],
    ["Lettuce", 2, 2],
    ["Tomatoes", 3, 3]

];

displayGardenTable();

function displayGardenTable (){
    for(var value of garden){
        document.getElementById("gardenRow").innerHTML += value + "</br>";
    }
}

// Total cost function, gets user input from the form, if total cost > budget, create an on screen warning 
function getTotalGardenCost (formID){
    let row1Total = garden [0][1] * garden[0][2];
    let row2Total = garden [1][1] * garden[1][2];
    let row3Total = garden [2][1] * garden[2][2];

    var totalGardenCost = row1Total + row2Total + row3Total;
    

    //TODO error handling for nulls and non-number user input
    try{
    //Get user input 
        var userBudget = formID.budgetInput.value;
            if (userBudget >= 1){
                if (totalGardenCost > userBudget){
                    document.getElementById("textout").innerHTML = "Garden is over budget!! Total garden cost is $" + totalGardenCost;
                } else {
                    document.getElementById("textout").innerHTML = "This Garden is within your budget at $" + totalGardenCost;
                }

        } else {
            document.getElementById("textout").innerHTML = "Invalid entry, please enter a number greater than 0";
        }
    
   }catch(err) {
       document.getElementById("textout").innerHTML = err.message;
   }
}

