// Type conversion
//1. String conversion

// num to string
let num = 123
let str = String(num)
console.log(typeof num);
console.log(typeof str);

// bool to string
let bool = true
let str1 = String(bool)
console.log(typeof bool);
console.log(typeof str1);

//2. Number conversion - number function
// string to num
let str2 = "1234abc" 
console.log(Number(str2)); //NaN(Not a number)
console.log(typeof Number(str2));

// bool to num
let bool2 = false //0 for F 1 for T
console.log(Number(bool2));

//3. Boolean conversion
console.log(Boolean(1)); //true
console.log(Boolean("Hello")); //true

//other than below one's all true
console.log(Boolean(0)); //false
console.log(Boolean("")); //false
console.log(Boolean(null)); //false
console.log(Boolean(undefined)); //false
console.log(Boolean(NaN)); //false

//Null to number
console.log(Number(null)); //0

//Undefined
console.log(Number(undefined)); // NaN