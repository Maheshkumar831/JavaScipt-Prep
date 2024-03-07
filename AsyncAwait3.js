const getDadJoke=async()=>{
    const response=await fetch("https://icanhazdadjoke.com/",{
        method:"GET",
        headers:{
            Accept:"text/plain"
        }
    })
    const jsonJokeData=await response.text();
    console.log(jsonJokeData);
}
getDadJoke();
//OUTPUT:What kind of dog lives in a particle accelerator? A Fermilabrador Retriever.
