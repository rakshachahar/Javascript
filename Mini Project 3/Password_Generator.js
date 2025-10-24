// // A-Z, a-z , 0-9, !@#$%^&*() 
// // input = len of password

const readline = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout
})
readline.question("Enter the length of password: ", (len)=>{
    len = parseInt(len);
    if(len<6){
        console.log("Password length should be at least 6");
    } else {
        const upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        const lower = "abcdefghijklmnopqrstuvwxyz";
        const numbers = "0123456789";
        const symbols = "!@#$%^&*()";
        const Char = upper + lower + numbers + symbols;
        let password = "";
        for(let i=0; i<len; i++){
            let randomIndex = Math.floor(Math.random() * Char.length);
            password += Char[randomIndex];

        }
        console.log(`Generated Password: ${password}`);
    }
    readline.close();
})

//at least one upper, one lower, one number, one symbol
// const readline = require("readline").createInterface({
//     input: process.stdin,
//     output: process.stdout
// });

// readline.question("Enter the length of password: ", (len) => {
//     len = parseInt(len);

//     if (len < 6) {
//         console.log("Password length should be at least 6");
//     } else {
//         const upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
//         const lower = "abcdefghijklmnopqrstuvwxyz";
//         const numbers = "0123456789";
//         const symbols = "!@#$%^&*()";
//         const allChars = upper + lower + numbers + symbols;

//         let password = "";

//         password += upper[Math.floor(Math.random() * upper.length)];
//         password += lower[Math.floor(Math.random() * lower.length)];
//         password += numbers[Math.floor(Math.random() * numbers.length)];
//         password += symbols[Math.floor(Math.random() * symbols.length)];

//         for (let i = password.length; i < len; i++) {
//             let randomIndex = Math.floor(Math.random() * allChars.length);
//             password += allChars[randomIndex];
//         }
//         console.log(`Generated Password: ${password}`);
//     }

//     readline.close();
// });
