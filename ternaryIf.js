var age = 21;
// Format is a (Condition) ? expression if true : expression if false; 
//Can be read as if age is >= 21, then drinkingAge = "Booze" else drinkingAge = "Milk"
var drinkingAge = (age >= 21) ? "Booze" : "Milk";
console.log(drinkingAge);
//document.write(drinkingAge);



function getFee(isMember) {
    return (isMember ? '$2.00' : '$10.00');
  }
  
  console.log(getFee(true));
  // expected output: "$2.00"
  
  console.log(getFee(false));
  // expected output: "$10.00"
  
  console.log(getFee(null));
  // expected output: "$10.00"


  function getStatus(isOperational){
    return (isOperational ? "System Online" : "System Down");
  }
  console.log(getStatus(true));




