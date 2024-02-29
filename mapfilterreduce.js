// Online Javascript Editor for free
// Write, Edit and Run your Javascript code using JS Online Compiler


//map function

const arr=[1,2,3,4,5];
const double=arr.map(function(x){
    return x*2;
});
console.log(double);
const triple=arr.map((x)=>x*3);
console.log(triple);

//Output:[ 2, 4, 6, 8, 10 ]
//[ 3, 6, 9, 12, 15 ]

//filter function

const arr2=[1,2,3,4,5];
const even=arr2.filter(function(x){
    return x%2==1;
});
console.log(even);

const odd=arr.filter((x)=>x%2==0)
console.log(odd);

//Output:[ 1, 3, 5 ]
//[ 2, 4 ]

//reduce function
 
 const arr3=[1,2,3,4,5];
 const sum=arr3.reduce(function(acc,x){
     acc+=x;
     return acc;
 },0);
 console.log(sum);
 
 //output:15
const arr=[10,50,20,40];
 const output=arr.reduce(function(max,i){
     if(i>max){
         max=i;
     }
     return max;
 },0);
 console.log("Max Number of the array is",output);
 //Max Number of the array is 50
