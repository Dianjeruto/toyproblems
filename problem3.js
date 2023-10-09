
const prompt = require('prompt-sync')();

//nssf standard contribution
let nssfcontrib = 1000;

//calculates paye based on income
function paye(income){
    let tax;
    income = income-1080;
    if (income <= 24000){
        tax = 0;
    }else if (income > 24000 && income <=32333){
        tax = 0.25*(income-24000)
    }else if (income >32333 && income <= 500000){
        tax = 2083 + (0.3*(income-32333))
    }else if (income > 500000 && income <= 800000){
        tax = 142383 + (0.325*(income-500000))
    }else if (income > 800000){
        tax = 239883 + (0.35*(income-800000))
    }else{
        //pass
    }

    return tax;
}

//calculates nhif based on income
function nhif(income){
    let nhifcontrib;
    if (income <= 5999){
        nhifcontrib = 150
    }else if (income >=6000 && income <= 7999){
        nhifcontrib = 300
    }else if (income >=8000 && income <= 11999){
        nhifcontrib = 400
    }else if (income >=12000 && income <= 14999){
        nhifcontrib = 500
    }else if (income >=15000 && income <= 19999){
        nhifcontrib = 600
    }else if (income >=20000 && income <= 24999){
        nhifcontrib = 750
    }else if (income >=25000 && income <= 29999){
        nhifcontrib = 850
    }else if (income >=30000 && income <= 34999){
        nhifcontrib = 900
    }else if (income >=35000 && income <= 39999){
        nhifcontrib = 950
    }else if (income >40000 && income <= 44999){
        nhifcontrib = 1000
    }else if (income >=45000 && income <= 49999){
        nhifcontrib = 1100
    }else if (income >=50000 && income <= 59999){
        nhifcontrib = 1200
    }else if (income >=60000 && income <= 69999){
        nhifcontrib = 1300
    }else if (income >=70000 && income <= 79999){
        nhifcontrib = 1400
    }else if (income >=80000 && income <= 89999){
        nhifcontrib = 1500
    }else if (income >=90000 && income <= 99999){
        nhifcontrib = 1600
    }else if (income >=100000){
        nhifcontrib = 1700
    }else{
        //pass
    }

    return nhifcontrib;
}

//input income to calculate various payments
let income = prompt("income:   ")

console.log("Gross Salary is", income)
console.log("Paye is ", paye(income))
console.log("NHIF is ", nhif(income))
console.log("NSSF is ", nssfcontrib)
console.log("Net Salary is ", (income-paye(income)-nhif(income)-nssfcontrib))