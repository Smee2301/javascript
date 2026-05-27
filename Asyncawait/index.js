let dis1 = document.querySelector("#dis1");
let data1 = document.querySelector("#data1");

let dis2 = document.querySelector("#dis2");
let data2 = document.querySelector("#data2");

let success = document.querySelector("#success");


function getData(data){
    return new Promise((res,rej)=>{
        setTimeout(()=>{
           res(data); //Promise ne complete karva mate: res() call karvu pade.
        },2000)
    })
}

async function newFunction(){
    dis1.innerHTML = "Data 1 fetching ....."
    let a = await getData(1);
    data1.innerHTML = `Data : ${a}`


    dis2.innerHTML = "Data 2 fetching ....."
    let b = await getData(2);
    data2.innerHTML = `Data : ${b}`
    
    success.innerHTML = `All data fetch successfull`

}

newFunction()