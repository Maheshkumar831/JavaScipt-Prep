/*function statement
functions are heart of js.*/
function a(){
  console.log("a called");
}
a();//a called

//function expression
var b=function(){
  console.log("b called");
}
b();
//b called

/*difference between fun statement and fun expression
ans is hoisting*/
a()
b()
function a(){
  console.log("a called");
}


//function expression
var b=function(){
  console.log("b called");
}
//output:a called
//typerror b is not defined. b is a variable b is intially stored in undefined



FUNCTION DECLARATION
//function statements are also known as function declearation


//ANONYMOUS FUNCTION-no identity
function(){
}
//uncaught erro:function statements require a function name.

//NAMED FUNCTION EXPRESSION
var b=function y(){
  console.log("b called");
}
//output: b called
y();
//output:error

//Diff b/w parameters and arguments
function y(param1,param2){
  console.log("b called");
}
y(args1,args2);


//FIRST CLASS FUNCTIONS-ability to use like values
//Functions are first class citizens.


//ARROW FUNCTIONS-introduce in es6..
//let & const also introduce in es6



//
