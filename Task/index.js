let name = document.querySelector("#name");
let btn = document.querySelector("#btn");
let display = document.querySelector("#display");



function RESULT() {

let m = document.querySelector("#math").value;
let s = document.querySelector("#science").value;
let c = document.querySelector("#computer").value;
let h = document.querySelector("#hindi").value;
let e = document.querySelector("#english").value;

let s1 = Number(m);
let s2 = Number(s);
let s3 = Number(c);
let s4 = Number(h);
let s5 = Number(e);

 if(!name.value || !s1 || !s2 || !s3 || !s4 ||!s5 ){
    alert("Fill all details");
    return;
}

let total = s1 + s2 + s3 + s4 + s5;
let percentage = ((total*100)/500);

let grade;

//here we cannot use switch beacuse grade is undefine if grade have some value then use switch-case //Your switch 
// statement is incorrect because switch compares exact values, but you're using conditions inside case.

// switch(grade){
//     case `${percentage>=90}`:
//         grade="o";
//         break;
//     case `${percentage<90 && percentage>=80}`:
//         grade="A";
//         break;
//     case `${percentage<80 && percentage>=70}`:
//         grade="B";
//         break;
//     case `${percentage<70 && percentage>=60}`:
//         grade="c";
//         break; 
//     case `${percentage<60 && percentage>=50}`:
//         grade="D";
//         break; 
//     case `${percentage<50 && percentage>=34}`:
//         grade="E";
//         break; 
//     case `${ percentage<34}`:
//         grade="FAIL";
//         break; 
    
// }

if(percentage<34 ||s1<34 || s2<34 || s3<34 || s4<34 || s5<34){
    grade="FAIL"
}
else if(percentage>=90){
    grade="O"
}else if(percentage>=80){
    grade="A"
}else if(percentage>=70){
    grade="B"
}else if(percentage>=60){
    grade="C"
}else if(percentage>=50){
    grade="D"
}else {
    grade="E"
}

    display.innerHTML = `Name : ${name.value} <br>
                         Maths : ${s1}<br>
                         Science : ${s2}<br>
                         Computer : ${s3}<br>
                         Hindi : ${s4}<br>
                         English : ${s5}<br>
                         
                        Total = ${total}<br>
                        percentage = ${percentage} % <br>
                        grade = ${grade}`
                         
}

btn.onclick = RESULT;