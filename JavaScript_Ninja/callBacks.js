var text = "Domo arigato!";
report("Before defining functions");

//Defines a function that takes a callback function and immediately invokes it
function useless(ninjaCallback) {
    report("In useless function");
    return ninjaCallback();
}

//Defines a simple funtion that returns a global variable

function getText() {
    report("In getText function");
    return text;
}

report("Before making all the calls");

assert(useless(getText) === text,
    "The useless function works! " + text);

report("After the calls have been made");