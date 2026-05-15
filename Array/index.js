//Array : An array stores multiple values in one variable.
//Array is mutable 

let arr = ['fizz','fanta','campa'];
let xss = ['apple','orange','berry'];

//chnage value
arr[1] = 'fanta2';
console.log(arr);

//Array Length
console.log(arr.length);



//array method
//Add Elements
//push() → add at end
arr.push('milk');

//unshift() → add at beginning
arr.unshift('sprite');
console.log(arr);



//Remove Elements
//pop() → remove last
arr.pop();
console.log(arr);

//shift() → remove first
arr.shift();
console.log(arr);


//includes() → check value
console.log(arr.includes('campa'));

//indexOf() → find index
console.log(arr.indexOf('banana'));
console.log(arr.indexOf('fizz'));

//Loop Through Array
//forEach and forOf

//Used for executing a function on each array item.
// let n = [34,2,134,23];
// n.forEach((num)=>{
//     console.log(num);
// })

// n.forEach((num,index)=>{
//     console.log(num,index)
// })

//forOf:Cleaner loop for iterable values. 
//print the array value
// let fruit= ['mango','apple','orange'];
// for(let i of fruit){
//     console.log(i[1]);
// }
// console.log(fruit[0]);//print single value of array 


// forin:print the array index value
// let ar = ['heroic','master','elite'];
// for(let i in ar){
//     console.log(i);
// }

//modern js
// console.log(ar.at(0));
// console.log(ar.at(1));
// console.log(ar.at(2));
// console.log(ar.at(-1)); //Negative Index Example

