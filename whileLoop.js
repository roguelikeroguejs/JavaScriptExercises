let total = 0;
let input = prompt("Enter a number, or 0 to stop--beginning of loop");
while(input != 0) {
    total += Number(input);
    input = prompt("Enter a number, or 0 to stop--inside of loop");
}
document.write("Total equals " + total + "--Loop ends");