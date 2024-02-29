const radius=[2,1,3,4];
const area=function(radius){
    return 2*Math.PI*radius*radius;
};
const diameter=function(radius){
    return 2*radius;
};
const circumference=function(radius){
    return 2*Math.PI*radius;
};
const calculate=function(radius,logic){
    let output=[];
    for(let i=0;i<radius.length;i++){
        output.push(logic(radius[i]));
    }
    return output;
};
console.log(calculate(radius,area));
console.log(calculate(radius,diameter));
console.log(calculate(radius,circumference));

/*
[
  25.132741228718345,
  6.283185307179586,
  56.548667764616276,
  100.53096491487338
]
[ 4, 2, 6, 8 ]
[
  12.566370614359172,
  6.283185307179586,
  18.84955592153876,
  25.132741228718345
]
*/
