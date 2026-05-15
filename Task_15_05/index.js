let stateoption = document.querySelector("#stateoption")
let cityoption = document.querySelector("#cityoption");
let btn = document.querySelector("#btn");

let ST = ['Gujarat','Maharastra','Punjab','Goa']
let GJ = ['Vadodara','Ahmedabad','Bilimora'];
let MH = ['Pune','Thane','bandra'];
let PB = ['Amritsar','Moga','Patiala'];
let GOA = ['Panjim','Kulem','Ponda'];


for(let i of ST){
    stateoption.innerHTML = stateoption.innerHTML + `<option>${i}</option>` //simple way

    // let option = document.createElement("option"); //professional way
    // option.text = i;
    // stateoption.appendChild(option)
}

function Citychnage(){

    let selectedState = stateoption.value;
    let citylist = [];
    
    cityoption.innerHTML = `<option>select city </option>`
    if(selectedState === "Gujarat"){
        citylist = GJ;
    }

    else if(selectedState === "Maharastra"){
        citylist = MH;
    }

    else if(selectedState === "Punjab"){
        citylist = PB;
    }

    else if(selectedState === "Goa"){
        citylist = GOA;
    }

    for(let i of citylist){
        cityoption.innerHTML = cityoption.innerHTML + `<option>${i}</option>`
    }

}



