// normal function statement

function sayHi(){
  console.log("Heelo ");
};
sayHi();


// function expression

var sayBye = function(){
  console.log("Bye");
};


function callFunction(fun){
  fun();
}
callFunction(sayBye);
