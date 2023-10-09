const prompt =require('prompt-sync')();
function calculateGrade(){
    //User enters student marks here
    let marks = prompt("Enter Marks between 0 and 100: ");

    // if statement to generate grade basement on grading system
    if (marks > 79) {
        console.log("The grade is A")
    }else if (marks >= 60 && marks <= 79){
        console.log("The grade is B")
    }else if (marks > 49 && marks <= 59){
        console.log("The grade is C")
    }else if (marks >= 40 && marks <= 49){
        console.log("The grade is D")
    }else if(marks <40){
        console.log("The grade is E")
    }else{ //Error to be generated if marks are out of range
        console.log("Error! Marks not within grading range")
    }
}

calculateGrade()
