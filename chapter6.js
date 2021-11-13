/*Write a while loop that will read and then print a series of strings
when two identical strings are typed */

//First create a variable to store the previous string entered
//var prevString = "";
//Create a preformatted text tag to store entered strings
//document.write("<pre>")
// Initial Prompt user for string (done before loop start)
//var inputString = prompt("Enter a string:")
//Loop will run as long as the input string does not match the previous string
//while(inputString != prevString){
    //Add the entered string to the <pre> tag and then move to the next line
//    document.write(inputString + "\n")
    //Set the previous string to the string that was just entered
//    prevString = inputString
    //Prompt user to eneter an input string
//    inputString = prompt("Enter a string:")
//}
//document.write(inputString + "</pre>")



// Every statement within the do while loop is flipped from the while loop
//var prevString = "";
//document.write("<pre>")
//do{
//    prevString = inputString  
//    var inputString = prompt("Enter a string:")
//    document.write(inputString + "\n") 
//}while(inputString != prevString);
//document.write("</pre>")

//Question 5 
//var sum = 0
//document.write("<pre>")
//for( i = 1;  i < 25; i++){
//    sum += i 
//    document.write(sum + "\n")
//}
//document.write("</pre>")

//Question 6 
var sum = 0
document.write("<pre>")
for(i = 1; i < 25; i++){
    sum += i 
    if (sum > 100) break;
    document.write(sum + "\n")
    
}
document.write("</pre>")
