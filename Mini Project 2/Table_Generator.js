// Multiplication Table Generator
const readline = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout
});
console.log("Welcome to the Multiplication Table Generator!");
readline.question("Enter a number to generate its multiplication table: ", (num) => {
    let n = parseInt(num);
    console.log(`Multiplication Table for ${n}:`);
    for (let i = 1; i <= 10; i++) {
        console.log(`${n} x ${i} = ${n * i}`);
    }
    readline.close();
});