const arr=[2,3,4];
const double=function(x){
    return x*2;
}
console.log(arr.map(double));

//shorter way..
const output=arr.map(function(x){
    return x*2;
});
console.log(output);

//USE ARROW FUNC

const res=arr.map((x)=>x*2);
console.log(res);
console.log(res);

/*[ 4, 6, 8 ]
[ 4, 6, 8 ]
[ 4, 6, 8 ]*/



//FILTER is a HIGHER ORDER FUNC that is function inside func...accept the parameter as  a func return FILTERING the value;
const arr=[2,3,4,5];
const res=arr.filter((x)=>x%2!=0);
console.log(res);
//[ 3, 5 ]


//normal func
const isOdd=function(x){
    return x%2!=0;
}
const output=arr.filter(isOdd);
console.log(output);
/*
[ 3, 5 ]
[ 3, 5 ]
*/
