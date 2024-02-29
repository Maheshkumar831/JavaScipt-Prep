// Online Javascript Editor for free
// Write, Edit and Run your Javascript code using JS Online Compiler

const users=[{firstName:"Mahesh",lastName:"Kumar",age:22},
            {firstName:"Madhu",lastName:"bala",age:22},
            {firstName:"kalai",lastName:"arasi",age:46}
            ];
const output=users.map((x=>x.firstName+x.lastName));
console.log(output);

const res=users.reduce(function(acc,curr){
   if(acc[curr.age]>0){
       acc[curr.age]==++acc[curr.age]
   } 
   else{
       acc[curr.age]=1;
   }
   return acc;
},{});
console.log(res);

const ans=users.filter((x=>x.age>30)).map((x=>x.firstName));
console.log(ans);

/*
[ 'MaheshKumar', 'Madhubala', 'kalaiarasi' ]
{ '22': 2, '46': 1 }
[ 'kalai' ]
*/
