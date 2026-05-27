// function greet(name,callback,callback3){
//     console.log("hello"+name);
//     callback();
//     callback3();
// }

// function welcome(){
//     console.log("welcome to my 2nd function");
// }

// function function3(){
//     console.log("this is my 3rd function");
// }

// greet(3,welcome,function3,);

//Anonymous Function 
// function F1(callback){
//     callback();
//     console.log("This is F1 fuction ");
// }

// F1(function innerfunction(){
//     console.log("This is innerfucntion");
// })




//callback with arrow function 
// function Arrow(a,b,sum){
//     return sum(a,b);
// }

// const result = Arrow(56,57,(x,y)=>x+y);
// console.log(result);



//callback example 
// function main(userid,callback){
//     console.log("fetching data from server.....");

//     const user = {
//             id : userid,
//             name : "Smit patel",
//             email : "snji32@gmail.com",
//             age : 21,
//             address: "Vadodara",
//         }

//     setTimeout(()=>{
//         callback(user);
//     },2000)

// }

// function Print(user){
//     console.log("Users deatail:");
//     console.log(`name : ${user.name}`);
//     console.log(`email: ${user.email}`);
//     console.log(`age;${user.age}`);
//     console.log(`address;${user.address}`);
// }

// main(100,Print);


//Asyncronous with callback hell
//callback hell : Callback hell specifically , means:nested asynchronous callbacks
    function f1(){
        console.log("f1 is exicute");
        setTimeout(()=>{
            function f2(){
            console.log("f2 is exicute");
            setTimeout(()=>{
                 function f3(){
                console.log("f3 is exicute");
            }
            f3()
            },2000)
        }
        f2()
        },2000)
    }
    f1()


    // function getdata(data,nextdata){
    //     setTimeout(()=>{
    //         console.log(data);
    //         if(nextdata){
    //         nextdata();
    //         }
    //     },2000)
    // }

    // getdata(1,
    //     getdata(2)  //error occur because this is normal function so imidiately exicute
    // )

    // getdata(1,()=>{ // now make arrow function it's called proper function so it exicute after 2 second 
    //     getdata(2,()=>{ 
    //         getdata(3,)
    //     })
    // })

  

