// let age = 20 ; 
// switch(age){
//     case 18:
//         console.log("age is 18");
//         break;
//     case 30:
//         console.log("age is 30");
//         break;
//     default:
//         console.log("nothing");
// }


// //. Logical AND (&&) Shortcut
// let ishelp = true;
// ishelp && console.log("This sentence is true ") // if left side true then right side run


//Optional Chaining (?.)
let users = {
    name : "smit patel",
    address : 21,
    age : " age",
    employee : {
        work:"Ahmedabad"
    }
}

console.log(users?.address);
console.log(users.employee?.work);