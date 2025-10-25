let a = 10
let b = 54.2
let c = 1e3  // 1*10^3 = 1000
let d = 0xff  // hexadecimal for 255

console.log(a)
console.log(typeof(b))

// Infinity 1/0
console.log(1/0);
console.log("abc"/0); //Nan
console.log(-1/0);  // -Infinity
 
// Number properties
// To Print them
console.log(Number. MAX_VALUE);
console.log(Number. MIN_VALUE);
console.log(Number. POSITIVE_INFINITY);
console.log(Number. NEGATIVE_INFINITY);
console.log(Number. NaN);

// Number Methods
// 1. Number(string) - converts string to number
console.log(Number("abc")); //Nan
console.log(Number("23.456"));
console.log(Number("23ab")); 
console.log(Number("234"));

// 2. parseInt(string) - converts string to integer
console.log(parseInt("23.456")); //23
console.log(parseInt("23ab")); //23
console.log(parseInt("abc")); //Nan

// 3. parseFloat(string) - converts string to float
console.log(parseFloat("23.456")); //23.456
console.log(parseFloat("23ab")); //23
console.log(parseFloat("abc")); //Nan
    
// 4. ifNaN(value) - checks if value is NaN
console.log(isNaN("abc")); //true
console.log(isNaN(123)); //false

// 5. isFinite(value) - checks if value is finite number
console.log(isFinite(123)); //true
console.log(isFinite(Infinity)); //false
console.log(isFinite(NaN)); //false

// 6. tostring() - converts number to string
let num = 123.4553;
console.log(num.toString());
console.log(typeof(num.toString()));

// 7. toFixed(digits) - formats number to specified decimal places
console.log(num.toFixed(2));

// 8. toPrecision(precision) - formats number to specified length
console.log(num.toPrecision(4));  

// 9. Number.isInteger(value) - checks if value is integer
console.log(Number.isInteger(123)); //true
console.log(Number.isInteger(123.45)); //false