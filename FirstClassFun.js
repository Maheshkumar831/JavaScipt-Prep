var greet=function(){
    return function (){
        console.log("Mahesh");
    }
}
console.log(greet());
greet()();
//[Function: mahi]
//Mahesh
