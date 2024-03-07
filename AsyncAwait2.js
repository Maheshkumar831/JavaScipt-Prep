const myUsers={
    userList:[]
}


const users = async()=>{
   const response=await fetch("https://jsonplaceholder.typicode.com/users")
   const userData=await response.json();
   return userData;
}

const anotherFunction=async()=>{
    const data=await users()
    myUsers.userList=data;
    console.log(myUsers);

}
anotherFunction();
console.log(myUsers);


/*
{userList: Array(0)}
script.js:15 {userList: Array(10)}
*/

