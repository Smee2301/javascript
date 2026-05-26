//Callback hell avoid karva mate promises use thay.
//“Promise means — kaam have pending che, complete thase tyare result aapse.”

// Before:
// login(function(){
//     profile(function(){
//         orders(function(){
            
//         });
//     });
// });

//After Promise:
// login()
// .then(()=>profile())
// .then(()=>orders())
// .then(()=>error());

//A Promise na 3 states hoy che:
// 1. Pending
// 2. Resolved (Fulfilled)
// 3. Rejected

//Syntax
// const promise = new promise((res,rej)=>{  
// })



// function getdata(){
//     return new Promise((res,rej)=>{
//         console.log("I am promise")
//         res("success");
//     });
// }

// let prmoise = getdata();

// prmoise.then((res)=>{
//     console.log("promise fullfilled ", res)
// })
// prmoise.catch((rej)=>{
//     console.log("prmoise rejected ", rej)
// })



//make a chain (nested)
// function asysnc1(){
//     return new Promise((res,rej)=>{
//         setTimeout(()=>{
//              console.log("This is api 1");
//              res("success");
//         },2000)
//     })
// }

// function async2(){
//     return new Promise((res,rej)=>{
//           setTimeout(()=>{
//              console.log("This is api 2");
//              res("success");
//         },2000)
//     })
// }

// console.log("data1 fetching.....");
// asysnc1().then(()=>{
//     console.log("data2 fetching.....");
//     async2().then(()=>{})
// })



function asysnc1(data){
    return new Promise((res,rej)=>{
        setTimeout(()=>{
            console.log(data);
            res("success");
        },2000)
    })
}

console.log("data1 fetching.......");
asysnc1(101)
.then((res)=>{
    console.log("data2 fetching.......");
    return asysnc1(102)
    .then((res)=>{
        console.log("data3 fetching.......");
        return asysnc1(103)
        .then((res)=>{
            console.log("data4 fetching........");
            return asysnc1(104)
            .then(()=>{
            })
        })
    })
})
//Promises
// const fetchdata = new Promise((res,rej)=>{
//     let success = true ;
//     setTimeout(() => {
//         if(success){
//             res("Data fetch successfully");
//         }
//         else{
//             rej("Error occur");
//         }
//     }, 2000);
// });

// fetchdata
// .then((result)=>{
//     console.log(result)
// })
// .catch((error)=>{
//     console.log(error);
// });

