//Pattern 
//square,triangle,pyramid, inverted triangle etc.
// 1. Square Pattern

const readline = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout
})
readline.question("Enter the number of rows: ", (rows) =>{
    readline.question("Choose pattern (square/ traingle/ inverted / pyramid): ", (pattern)=>{
        let n = parseInt(rows);
        pattern = pattern.toLowerCase();
//Square Pattern
        if (pattern == "square"){
            for (let r = 1; r<=n; r++){
                let row = "";
                for (let c = 1; c<=n; c++){
                    row += "* ";
                }
                console.log(row);
            }
        }
//Triangle Pattern
        else if (pattern == "triangle"){
            for (let r = 1; r<=n; r++){
                let row = "";
                for (let c = 1; c<=r; c++){
                    row += "* ";
                }
                console.log(row);
            }
        }
//Inverted Triangle Pattern
        else if (pattern == "inverted"){
            for (let r = n; r>=1; r--){
                let row = "";
                for (let c = 1; c<=r; c++){
                    row += "* ";
                }
                console.log(row);
            }
        }
//Pyramid Pattern
        else if (pattern == "pyramid"){
            for (let r = 1; r<=n; r++){
                let row = "";
                for (let s = 1; s<=n-r; s++){
                    row += " ";
                }
                for (let c = 1; c<=r; c++){
                    row += "* ";
                }
                console.log(row);
            }
        }
        else{
            console.log("Invalid pattern choice. Please choose from square, triangle, inverted, or pyramid.");
        }
        readline.close();   
    })
})