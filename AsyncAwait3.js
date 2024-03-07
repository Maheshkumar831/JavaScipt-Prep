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



const jokeObject={
                  id: "HYoGYTvX0g",
                  joke: "What is the tallest building in the world? The library – it’s got the most stories!"
                  
               }
const postDadJoke = async (jokeObj) => {
  const response = await fetch("https://httpbin.org/post", {
    method: "POST",
    headers: {
        "Content-Type": "application/json"
    },
    body:JSON.stringify(jokeObj)
  });
  const responseData= await response.json();
  console.log(responseData.headers);
};
postDadJoke();

/*
Accept
: 
"*/*"
Accept-Encoding
: 
"gzip, deflate, br, zstd"
Accept-Language
: 
"en-US,en;q=0.9"
Content-Length
: 
"0"
Content-Type
: 
"application/json"
Host
: 
"httpbin.org"
Origin
: 
"http://localhost:5500"
Referer
: 
"http://localhost:5500/"
Sec-Ch-Ua
: 
"\"Chromium\";v=\"122\", \"Not(A:Brand\";v=\"24\", \"Google Chrome\";v=\"122\""
Sec-Ch-Ua-Mobile
: 
"?0"
Sec-Ch-Ua-Platform
: 
"\"Windows\""
Sec-Fetch-Dest
: 
"empty"
Sec-Fetch-Mode
: 
"cors"
Sec-Fetch-Site
: 
"cross-site"
User-Agent
: 
"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36"
X-Amzn-Trace-Id
: 
"Root=1-65e9da28-535426081dc17b1418ac97f8"
[[Prototype]]
: 
Object
﻿


*/
