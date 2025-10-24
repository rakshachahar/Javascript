// 5! = 5 x 4 x 3 x 2 x 1 = 120
// Factorial of a number 

const readline = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout
})
readline.question("Enter a number to find factorial: ", (num)=>{
    num = parseInt(num);
    if(num<0){
        console.log("Enter positive numbers");
    } else {
        let factorial = 1;
        for(let i=1; i<=num; i++){
            factorial *= i; 
        }
            console.log(`Factorial of ${num} is ${factorial}`);
    }
    readline.close();
})  

// Using Recursion
//function factorial(n) {
        //     if (n === 0 || n === 1) {
        //         return 1;
        //     } else {
        //         return n * factorial(n - 1);
        //     }
        // }
