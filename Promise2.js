const myPromise=new Promise((resolve,reject)=>{
    const error=true;
    if(!error){
        resolve("Yes resolved the promise");
    }
    else{
        reject("reject the promise");
    }
});
const myNextPromise=new Promise((resolve,reject)=>{
    setTimeout(function(){
        resolve("Yes resolved the myNextPromise");
    },3000);
});
myNextPromise.then((value)=>{
  console.log(value);  
})
console.log(myPromise)
myPromise.then((value)=>{
  console.log(value)
})
.catch(err=>{
      console.log(err);
})
/*
Promise { <rejected> 'reject the promise' }
reject the promise
Yes resolved the myNextPromise

*/
