/*CALLBACK FUNCTION are also known as first class functions.
They are first class citizens.
callback fun are more powerful
js are synchrous and single threaded.
but callback fun make asynchronous*/

function x(y){
}
x(function y(){
}
  //function y callback sometime later.
//ASYCNHROUS TASK IN CALLBACK FUN
  
setTimeout(function(){
 console.log('hey');   
},5000);

function x(y){
    console.log("x");
    y();
    
}

x(function y(){
    console.log("Y");
})
/*
output:x
Y
hey
*/
setTimeout(function(){
 console.log('hey');   
},5000);

function x(y){
    console.log("x");
    
}

x(function y(){
    console.log("Y");
})
y();
/*
x
ERROR!
/tmp/hq3pkqqPn8.js:17
y();
^

ReferenceError: y is not defined
    at Object.<anonymous> (/tmp/hq3pkqqPn8.js:17:1)
*/


//EVENT LISTENERS

document.getElementById("clickMe").
  addEventListener("click",function xyz(){//callback function
    console.log("button clicked");
});


//CLOSURES DEMO WITH EVENT LISTENERS

function attachEventListeners(){
  let count=0;
  document.addElementById('clickMe',function xyz(){
    console.log("Button clicked",++count);
  }
}
attachEventListeners();
//if button clicked web page like call the xyz function but count is outer scope that is closure...lexical scope.
