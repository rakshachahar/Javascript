//alert and prompt not run in nodejs environment because they are browser specific function
// let name = prompt("Enter your name: ")
// let name = prompt("Enter your name: ", "18") bydefault value
// console.log(name)
// alert("Are you ready!!")


//require is a function to import modules(libraries)
//readline is a function which allow to read input from console 
//createInterface craetes a interface/connecn b/w program and console
const readline = require("readline");
readline.createInterface({
    input: process.stdin,
    output: process.stdout
})
readline.question("Enter your name : ", (name)=>{
    console.log("Hello " + name);
    readline.close();
})

//parseInt and parseFloat