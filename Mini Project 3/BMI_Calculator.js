// BMI Calculator

const readline = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout
})
readline.question("Enter your weight in kg: ", (weight)=>{
    weight = parseFloat(weight);
    readline.question("Enter your height in meters: ", (height)=>{
       height = parseFloat(height);
        if(weight <=0 || height <=0){  
        console.log("Weight and height must be positive numbers.");
    } else {
        let bmi = weight / (height * height);
        bmi = bmi.toFixed(2);
        console.log(`Your BMI is: ${bmi}`);
        if(bmi < 18.5){console.log("You are underweight.");
        } 
        else if(bmi >= 18.5 && bmi < 24.9){console.log("You have a normal weight.");
        } 
        else if(bmi >= 25 && bmi < 29.9){console.log("You are overweight.");
        } 
        else {console.log("You are obese.");
        }
    }
    readline.close();
    });
})