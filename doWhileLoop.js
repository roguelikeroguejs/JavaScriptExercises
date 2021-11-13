let total = 0;
do{
    input = prompt("Enter a number, or 0 to stop--inside of loop");
    total += Number(input);
    
} while (input != 0);
document.write("Total equals " + total + "--Loop ends");