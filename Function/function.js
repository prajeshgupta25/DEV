//function body

function callMe(name){
  console.log("Call me function called!");
  console.log("Says Hii!");
  return 10;
}

console.log(callMe);

// let rval = callMe();
// console.log(rval);

//function and variable mein koi bhi difference nii hai

callMe("Steve");
//Function can be passed as an argument in a function and also they can be returned from the function just like variables !

let sayHi; //undefined

//vaild syntax
sayHi = function(){
  console.log("Function says HII !!");
}
