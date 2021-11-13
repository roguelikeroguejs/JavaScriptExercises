function factTable(formID) {
    //Get the limit value from the user 
    var limit = formID.textin.value;

    //Validate the limit entered by user 
    if(limit >= 1){

        //Initialize variables
        var val = 1;
        var fact = 1;
        var result = "<pre>VALUE      FACTORIAL\n";

        //Generate the table as a string
        for (var count = 1; count <= limit; count++) {
            result += val + "       " + fact + "\n";
            fact = fact * ++val;
            if (fact > 999999999999999) {
                result += "value too large";
                break;
            }
        }
        result += "</pre>";
    } else {
        result = "Invalid limit!";
    }
    // Output the table 
    document.getElementById("textout").innerHTML = result;
}