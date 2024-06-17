/*
Higher order func are accept the parameters returns a func as a value.
*/
Eg:NORMAL FUNC
let arr=[2,3,4];
let calcarea=function(arr){
    let output=[];
    for(let i=0;i<arr.length;i++){
        output.push(Math.PI*arr[i]*arr[i]);
    }
    return output;
}
console.log(calcarea(arr));
o/p:[ 12.566370614359172, 28.274333882308138, 50.26548245743669 ]

//HIGHER ORDER FUNC
let arr=[2,3,4];
let area=function(r){
    return Math.PI*r*r;
}
let circum=function(r){//CALLBACK FUNCTION AREA AND CIRCUM
    return 2*Math.PI*r;
}
let calculate=function(arr,logic){//HIGHER ORDER FUNCTION
    let output=[];
    for(let i=0;i<arr.length;i++){
        output.push(logic(arr[i]));
    }
    return output;
    
}
console.log(calculate(arr,area));
console.log(calculate(arr,circum));
/*
[ 12.566370614359172, 28.274333882308138, 50.26548245743669 ]
[ 12.566370614359172, 18.84955592153876, 25.132741228718345 ]

*/

//MAP FUNC
MAP FUCN IS SAME AS CALCULATE FUNC-create a new array iterate the original array stored into the new array.
console.log(arr.map(area));
//[ 12.566370614359172, 28.274333882308138, 50.26548245743669 ]
