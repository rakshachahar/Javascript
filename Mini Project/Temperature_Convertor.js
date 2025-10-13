// Numeric Val (Temperature)
// to which convert (F/ C/ K) 

const readline = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout
})
readline.question("Choose your Unit (C/F/K): ", (Unit)=>{
    readline.question("What's the temp.: " , (tmp)=>{
    let unit = Unit.toUpperCase();
            let temp = parseFloat(tmp);
            if (unit== "C") {
                console.log("Temperature in Fahrenheit  is :",((9 * temp)/5 + 32));
                console.log("Temperature in Kelvin is :", temp + 273.15)
            }
            else if(unit == "F"){
                console.log("Temperature in Celsius is :",(5/9)*(temp -32));
                console.log("Temperature in Kelvin is :", ((5/9)*(temp -32) + 273.15))
            }
            else if (unit == "K"){
                console.log("Temperature in Celsius is :",temp-273.15);
                console.log("Temperature in Fahrenheit is :", ((temp - 273.15) * 9/5 + 32));
            }
            else{
                console.log("The unit is not valid!");
            }
            readline.close();
        })
    })

