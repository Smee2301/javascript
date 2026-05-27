//callback hell
// console.log("Q1. What is a callback function?");
// function q1(){
//     setTimeout(()=>{
//         console.log("Ans : Function passed as argument to another function");
//         console.log(" Q2. Which keyword is used to create a Promise?");
//         function q2(){
//             setTimeout(()=>{
//             console.log("Ans : Prmoise")
//             console.log("Q3. Which Promise state means operation completed successfully ? ");
//             function q3(){
//                 setTimeout(()=>{
//                      console.log("Ans : Fulfilled");
//                      console("Q4. Which method handles successful Promise result")
//                 },3000);
//             }
//             q3()
//         },3000)
//         }
//         q2()
//     },3000)
// }
// q1()



//Prmoise 
// function que(ans){
//     return new Promise((res,rej)=>{
//         setTimeout(()=>{
//             console.log(ans);
//             res();
//         },3000)   
//     })
// }


// console.log("Q1. What is a callback function?");
// que("Ans : Function passed as argument to another function")
// .then(()=>{
//     console.log(" Q2. Which keyword is used to create a Promise?");
//     return que("Ans : Prmoise");
// })
// .then(()=>{
//     console.log(" Q3. Which Promise state means operation completed successfully ? ")
//     return que("Ans : Fulfilled")
// })



//Async-await
// function que(ans){
//     return new Promise((res,rej)=>{
//         setTimeout(()=>{
//             res(ans)
//         },3000)   
//     })
// }

// console.log("Q1. What is a callback function?");
// async function Ans(){
//     try{

    
//      let a1 = await que("Ans : Function passed as argument to another function");
//     console.log(a1);

//     console.log("Q2. Which keyword is used to create a Promise?");
//     let a2 = await que("Ans : Promise");
//     console.log(a2);

//     console.log("Q3. Which Promise state means operation completed successfully ?");
//     let a3 = await que("Ans : Fulfilled");
//     console.log(a3);

//     console.log("Q4. Which method handles successful Promise result? ");
//     let a4 = await que("Ans : .then()");
//     console.log(a4);

//      console.log("Q5. Which method handles Promise errors?");
//     let a5 = await que("Ans : .catch()");
//     console.log(a5);
    
//      console.log("Q6. What does await do?");
//     let a6 = await que("Ans : Waits for Promise resolution");
//     console.log(a6);

//      console.log("Q7. Which keyword makes a function asynchronous");
//     let a7 = await que("Ans : async");
//     console.log(a7);

//      console.log("Q8. What is callback hell? ");
//     let a8 = await que("Ans : Nested asynchronous callbacks");
//     console.log(a8);

//      console.log("Q9. What will this return?   resolve(); ");
//     let a9 = await que("Ans : undefined");
//     console.log(a9);

//      console.log("Q10. Which is the modern alternative to callback hell?");
//     let a10 = await que("Ans : Promises and async/await");
//     console.log(a10);
//     }
//     catch(err){
//         console.err(err)
//     }

// }

// Ans();



//short code professional
// function main(ans){
//     return new Promise((res,rej)=>{
//         setTimeout(()=>{
//             res(ans)
//         },2000)
//     })
// }

// const arr = [
//     [" Q1. What is a callback function? ", " Ans : Function passed as argument to another function "],
//                 [" Q2. Which keyword is used to create a Promise? "," Ans : Promise "],
//                 [" Q3. Which Promise state means operation completed successfully ? ", " Ans : Fulfilled "]
// ];
// async function que() {
//     try{
//     for(const[i,j] of arr){
//         console.log(i);

//         const res = await main(`Ans: ${j}`);
//         console.log(res);
//     }
// }
// catch(err){
//     console.log(err);
// }

// }

// que();


async function hejs(){
    try{
    let res = await fetch('https://jsonplaceholder.typicode.com/users');
    let gsd = await res.json();
    console.log(gsd);
     gsd.map((user)=>{
            console.log(user.name);
        })
    }
    catch(err){
        console.log(err);
    }

}
hejs()






function api(){
        fetch("https://jsonplaceholder.typicode.com/users")
        .then((res)=>{
            return res.json()
        })
        .then((gsd)=>{
            console.log(gsd);
            gsd.map((user)=>{
                console.log(user.name);
            })
        })
        .catch((err)=>{
            console.log(err);
        })
}

api();