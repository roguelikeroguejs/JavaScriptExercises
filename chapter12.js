//Bitwise Operators
//bitwise and, & sets each output bit to 1 only if both inputs are 1
//bitwise or, | sets each output bit to 1 if either input bit is 1 
//bitwise exclusive or, ^ sets each output bit to 1 only if the input bits are different e.g. 1 and 0 
//bitwise not, ~ sets the input bit to the opposite e.g. ~1010 equals 0101



// 1101001101011011
// 1001011100101101

//&1001001100001001
//|1101011101111111 
//^0100010001110110


function addNum(arg1, arg2){
    let result;
    if(typeof arg1 == "number" && typeof arg2 == "number"){
         result = arg1 + arg2;
    }else{
         result = Number(arg1) + Number(arg2);
    }
    return result;

}

addNum(1,"three");

//book solution uses ternary operations 
function addNum2 (arg1,arg2) {
    var num1 = 
        (typeof arg1 == "number")? arg1 : Number(arg1);     
    var num2 = 
        (typeof arg2 == "number")? arg2 : Number(arg2);
    return num1 + num2;
}

addNum2(1, "three");

// consider the string "Aab c25 abc d371 qa99"

var codeStr = "Aab c25 abc d371 qa99";

//Which substring or substrings would be matched by the following regex 

var newCodeStr = codeStr.search(/\w{2}\s\w\d{2}/g);


