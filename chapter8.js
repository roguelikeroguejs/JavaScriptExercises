// 1 Write a function that accepts 3 numbers as arguments and returns the minmum
var min3 = function (num1, num2, num3){
    var min = num1;
    if (num2 < min){
        min = num2;
    }
    if (num3 < min){
        min = num3;
    }
    return min;

}

// 2 Write an arrow function that compares two strings and returns the shortest
//Hint: can be done in short form 

var shortestString = (string1, string2) => (string1.length > string2.length) ? string2 : string1;

// The above does the same as this
var shortestString = function (string1, string2){
    var shorterStr = string1;
    if (string2.length < shorterStr){
        shorterStr = string2;
    }
    return shorterStr;
}
