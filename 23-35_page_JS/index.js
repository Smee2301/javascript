//variable let , var , const 


//let local scope and must be initialize first , cannot be re declare
// let x = "smit patel"
// x = 123;// you can change the value but not re declare
// document.write(x);

// function Varfunction(){ //let using function
//     let x = "Hello other things"
//     x= "you can reinitialize";
//     document.write(x);
// }
// Varfunction()

// let f = null;
// document.write(typeof(f));//object


// let a = 1234n
// document.write(typeof(a)) // bigint

// let s = [231,23,3,2];
// document.write(typeof(s)) // object

// function hello(){
// }
// document.write(typeof(hello)) //function 

// let demo = document.querySelector("#demo");
// document.write(demo)


//Const : cannot redeclare or reinitialize // local scope
// const a = 23;
// // a = 24 // can not reinitialize error
// document.write(a);


//var : you can redeclare or reinitialize 
// var x = "smit patel"
// var x = 10;

//hoisting 
// document.write(x)
// var x = 10 // because of var is global it print undefine
//  other wise in let or const referese error is happpen