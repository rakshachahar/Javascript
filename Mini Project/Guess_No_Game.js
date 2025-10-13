// Math.floor(7.8) (remove decimal)

const readline = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout
    })
let randomNumber = (Math.floor(Math.random()*10)+ 1);
let attempt = 0;

function GuessNumber(){
    readline.question("Guess The Number between 1 to 10: ", (num)=>{
    let n = parseInt(num);
    attempt = attempt+1;
   
    if (n < randomNumber) {
        console.log("Number you guessed is Small");
        GuessNumber();
    }
    else if (n > randomNumber){
        console.log("Number you guessed is Big");
        GuessNumber()
    }
    else{
        console.log("Congrats! Your Guessed the Number in ", (attempt), "attempts");  
    readline.close()
    }
})
}
    GuessNumber();

   
