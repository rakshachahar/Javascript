// WITHOUT OPTIONS 
const readline = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout
})

const questions = [{q:"What is the full form of JS? ", a:"JavaScript"},
                   {q:"What is 2 + 2? ", a:"4"},
                   {q:"What is the capital of Japan? ", a:"Tokyo"}];

let score = 0;
let i = 0;
function askQuestion(index) {
    if (index >= questions.length){
        console.log(`Quiz Over! Your score is ${score} out of ${questions.length}`);
        readline.close();
        return;
    }
        readline.question(questions[index].q, (userAnswer) => {
            if (userAnswer.trim().toLowerCase() === questions[index].a.trim().toLowerCase()) {
                console.log("Correct!");
                score++;
            } else {
                console.log(`Wrong! The correct answer is: ${questions[index].a}`);
            }
            askQuestion(index + 1);
        });
    }
askQuestion(0);

// WITH OPTIONS

// const readline = require("readline").createInterface({
//     input: process.stdin,
//     output: process.stdout
// });

// const questions = [
//     {
//         q: "What is the full form of JS?",
//         options: ["JavaSource", "JavaScript", "JustScript", "JQuery"],
//         a: "B"
//     },
//     {
//         q: "What is 2 + 2?",
//         options: ["3", "4", "22", "5"],
//         a: "B"
//     },
//     {
//         q: "What is the capital of Japan?",
//         options: ["Seoul", "Beijing", "Tokyo", "Bangkok"],
//         a: "C"
//     }
// ];

// let score = 0;

// function askQuestion(index) {
//     if (index >= questions.length) {
//         console.log(`\n Quiz Over! Your score is ${score} out of ${questions.length}`);
//         readline.close();
//         return;
//     }

//     const current = questions[index];
//     console.log(`${current.q}`);
//     console.log(`A) ${current.options[0]}`);
//     console.log(`B) ${current.options[1]}`);
//     console.log(`C) ${current.options[2]}`);
//     console.log(`D) ${current.options[3]}`);

//     readline.question("Your answer (A/B/C/D): ", (userAnswer) => {
//         if (userAnswer.trim().toUpperCase() === current.a) {
//             console.log(" Correct!");
//             score++;
//         } else {
//             console.log(`Wrong! The correct answer is: ${current.a}) ${current.options[current.a.charCodeAt(0) - 65]}`);
//         } // to get index (0) - 65 = 0,1,2,3 for A,B,C,D
//         askQuestion(index + 1);
//     });
// }

// askQuestion(0);
