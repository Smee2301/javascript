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

const fetchdata = new Promise((res,rej)=>{
    let success = true ;
    setTimeout(() => {
        if(success){
            res("Data fetch successfully");
        }
        else{
            rej("Error occur");
        }
    }, 2000);
});

fetchdata
.then((result)=>{
    console.log(result)
})
.catch((error)=>{
    console.log(error);
});

