// Rock Paper Scisor Game
const readline = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout
    })

const choices = ["rock","paper","scissor"];
const computerchoice = choices[Math.floor(Math.random()*3)];
console.log("Welcome to Rock Paper Scissor Game!");

readline.question("Enter your choice (rock/paper/scissor): ",(userchoice)=>{
    userchoice = userchoice.toLowerCase();

    console.log(`Computer chose: ${computerchoice}`);

    if (userchoice === computerchoice){
        console.log("It's a tie!");
    }
    else if (
        (userchoice === "rock" && computerchoice === "scissor") || 
        (userchoice === "paper" && computerchoice === "rock") ||
        (userchoice === "scissor" && computerchoice === "paper")){
            console.log("You win!");    
        }

// USER LOSE CONDITIONS
//(rock && paper)||(paper && scissor)||(scissor && rock)

    else if (choices.includes(userchoice)){
        console.log("Computer wins!");
    }
    else{
        console.log("Invalid choice! Please choose rock, paper, or scissor.");
    }       
    readline.close();   
})

