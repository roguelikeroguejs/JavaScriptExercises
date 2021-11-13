function findSquare(formId) {
    //Get the input value
    var inputNum = formId.textin.value;

    // If valid, compute its square 
    var result;
    if (inputNum >= 1 && inputNum <= 10) {
        result = inputNum*inputNum
    
    // Otherwise, store an erro message 
    } else {
        result = "Invalid number!";
    }
    // Display the result 
    document.getElementById("textout").innerHTML = result;
}