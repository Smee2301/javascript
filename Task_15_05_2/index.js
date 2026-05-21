//❌ convert in direct value then write it in function 
// let name = document.querySelector("#name").value;
// let age = document.querySelector("#age").value;
// let Age = Number(age);
// let mail = document.querySelector("#email").value;
// let password = document.querySelector("#password").value;
// let confirmpass = document.querySelector("#confirmpass").value;
// let file = document.querySelector("#file").value;

function Checkpass(){
    let password = document.querySelector("#password").value;
    let confirmpass = document.querySelector("#confirmpass").value;

    let upcase = false;
    let lowcase = false;
    let num = false;
    let special = false;

    let hasspecial = "!@#$%^&*()"

    if(password.length < 8){
        alert("password length is atleast 8");
        return false;
     }
    
    for(let i = 0; i < password.length; i++){
        
    let char = password[i];

    if(char >= "A" && char <= "Z"){
        upcase = true;
    }

    if(char >= "a" && char <= "z"){
        lowcase = true;
    }

    if(char >= "0" && char <= "9"){
        num = true;
    }

    if(hasspecial.includes(char)){
        special = true;
    }
}

    if(!upcase){
        alert("password must include uppercase");
        return false;
    }
    if(!lowcase){
        alert("password must include lowercase")
        return false
    }
    if(!num){
        alert("password must include number")
        return false;
    }
    if(!special){
        alert("password must include special character")
        return false;
    }
    
     if(password != confirmpass){
            alert("password not match renter");
            return false;
        }
    return true;
}

function Checkmail(){
    let email = document.querySelector("#email").value;
    if(email.length<10){
        alert("invalid email");
        return false;
    }
    if(!email.includes("@")||!email.includes(".")){
        alert("invalid email")
        return false;
    }
    return true
}


function Filesubmit(){
    let file = document.querySelector("#file").files[0]; //files is an array-like list of selected files. //files → all selected files // [0] → first selected file
    if(!file){
        alert("select file");
        return false;
    }

    let allowtype = ["application/pdf", "image/jpeg" , "image/jpg"]
    if(!allowtype.includes(file.type)){
        alert("Invalid file type");
        return false;
    }

    let maxsize = 50 * 1024 * 1024;
    if(file.size > maxsize ){
        alert("File size must be less than 50MB");
        return false;
    }

    return true;
}

let btn = document.querySelector("#button");
btn.addEventListener("click",()=>{

let name = document.querySelector("#name").value;
let age = document.querySelector("#age").value;    
let email = document.querySelector("#email").value;
let password = document.querySelector("#password").value;
let confirmpass = document.querySelector("#confirmpass").value;


let male = document.querySelector("#male");
let female = document.querySelector("#female");
let other = document.querySelector("#other");

    if(name.trim() === "" || age === "" || email.trim() === "" || password.trim() === "" || confirmpass.trim() === "" ){
        alert("rquire to fill all field");
        return false;
    }

    if(!male.checked && !female.checked && !other.checked){
        alert("please select gender");
        return false;
    } 

    if(Number(age)<0){
        alert("age is not nagative reenter");
        return false;
    }
    
    if(!Checkpass()){
            return false;
        }

    if(!Checkmail()){
        return false;
    }

    if(!Filesubmit()){
        return false;
    }
    alert("Form Submit successfully");

    console.log(name);
    console.log(age);
    console.log(email);
    console.log(password);
    console.log(confirmpass);

    if(male.checked){
        console.log("male");
    }
    else if(female.checked){
        console.log("female");
    }
    else if(other.checked){
        console.log("other");
    }
    return true;
})


// let btn = document.querySelector("#button");
// btn.addEventListener("click", Submit)