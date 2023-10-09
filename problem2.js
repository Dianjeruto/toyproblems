const prompt =require('prompt-sync')();

function speedLimit(speed){
   
    // speed below or equal to 70 is okay
    if (speed <= 70) {
        console.log("Okay")
    }else if (speed > 70){ //user to earn one demerit point for each 5 units of speed surpassed
        console.log( `${(speed-70)/5} Demerit Points Earned` )
    }else{
        console.log("Error!")
    }
}
 // user to enter vehicle speed
let speed = prompt("Enter Speed of the Vehicle: ");
speedLimit(speed)
