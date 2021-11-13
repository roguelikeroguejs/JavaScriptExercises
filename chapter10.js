// Given this array colors

var colors = ["orange", "yellow", "green", "blue", "indigo"]

/* Write two statements to complete teh spectrum by adding "red" at the beginning 
and "violet" at the end
*/
colors.unshift("red");
colors.push("violet");

/* Use a forEach loop to iterate over the elements of the colors array 
and constructs a new array colorLength containing the length of each 
color name string
*/

var colorLength =[];
colors.forEach(colorLen);
colorLen(item, index, arr) 
{
    colorLength[index] = arr[index].length;

}

/* Consider a 2-dimensional array composers in the text, write nested 
for loops to search this array for the value 1840, using a break statement 
with a label to exit the search if teh value is found. Assume thsi value may
be found in any row and column. At the end print the row index and column index 
where the value lies.
*/