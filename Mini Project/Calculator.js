//operand operator (+, -, *, /, %)
const readline = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout
})
readline.question("Enter first num: ", (n1)=>{
    readline.question("Enter first num: ", (n2)=>{
        readline.question("Enter Operator (+, -, *, /, %): ", (op)=>{
            let num1 = parseFloat(n1);
            let num2 = parseFloat(n2);
            switch (op) {
                case '+':
                    console.log("Result: ",num1+num2);
                    break;
                case '-':
                    console.log("Result: ",num1-num2);
                    break;
                case '*':
                    console.log("Result: ",num1*num2);
                    break;
                case '/':
                    console.log("Result: ",num1/num2);
                    break;
                case '%':
                    console.log("Result: ",num1%num2);
                    break;
                default:
                    console.log("Invalid Operator");
                    break;
            }
            readline.close();
        })
    })
})
