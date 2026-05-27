function main (a,b,opr){
    return opr(a,b);
}

function sum(a,b){
    return a+b;
}

function sub(a,b){
    return a - b;
}

function mul(a,b){
    return a*b ; 
}

function div(a,b){
    if(b===0){
        return `divide by zero not possible `;
    }
    else{
        return a/b;
    }
}


console.log(main(5,6,sum));
console.log(main(2,6,sub));
console.log(main(4,6,mul));
console.log(main(5,25,div));

