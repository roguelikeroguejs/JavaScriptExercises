//var price = 7.50;
//var discount = .10;

// 1 Proper syntax aka more like java 
//function discountPrice (price, discount){
//    return price - (price*discount);


//}

// 2 Arrow Function syntax like the dude teaching cypress 
//let discountPrice = (price, discount) => {
//    return price - (price*discount);
//}

// Arrow Function v2 no need for the keywords Function or Return 

//var price = prompt("Enter the sticker price of the item:")
//var discount = prompt("Enter the discount as a percentage:")
//let discountPrice = (price, discount) => (price - (price*discount))
//document.write(discountPrice(price,discount));

//var price = prompt("Enter the sticker price of the item:")
//var discount = prompt("Enter the discount as a percentage:")
//let discountPrice = Number(price) - (Number(price)*Number(discount)/100)
//document.write("The sale price is $ " +discountPrice)


//let ageSarah = 12
//let ageRobert = 20
//let ageMiguel = 15
var ageRobert = prompt("Enter Robert's age:")
var ageSarah = prompt("Enter Sarah's age:")
var ageMiguel = prompt("Enter Miguel's age:")


if (ageRobert > ageSarah && ageRobert > ageMiguel){
    robertIsOldest = true 
    document.write("Robert is the oldest")
    
} else {
    robertIsOldest = false 
    document.write("Robert is not the oldest")
}

