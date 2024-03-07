const myPromise=new Promise((resolve,reject)=>{
    const error=false;
    if(!error){
        resolve("Yes resolved the promise");
    }
    else{
        reject("reject the promise");
    }
});
console.log(myPromise)
myPromise.then((value)=>{
  console.log(value);  
})

/*
Promise { 'Yes resolved the promise' }
Yes resolved the promise*/


const myPromise=new Promise((resolve,reject)=>{
    const error=true;
    if(!error){
        resolve("Yes resolved the promise");
    }
    else{
        reject("reject the promise");
    }
});
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
*/
