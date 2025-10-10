//Javscript Operators
//1. Arithmetic Operator [ + , - , * , / , % , ++ , --  , **]
console.log( 3 + 2); //5
console.log( 3 - 2); //1
console.log( 4 * 2); //8
console.log( 3 / 2); //1.5
console.log( 3 ** 3); // 3* 3* 3 = 27
console.log( 8 % 3); //Remainder = 2

let x = 8;
//Postfix 
console.log(x++);  //baad m update hogi use k bdd for now 8
console.log(x--); //yha ++ hoga or 9 hogyi
//Prefix
console.log(--x); //9-1 = 8 piche s yha pehle h toh 8-1 = 7
console.log(++x); // here 8 pehle hoga

//2. Assignment Operator [ += , -= , *= , /= , %= , =]
let y = 10;
y -= 7 
console.log(y);
y += 7 
console.log(y);
y *= 7 
console.log(y);
y /= 7 
console.log(y);
y **= 3  //10*10*10 = 1000
console.log(y);
y %= 3
console.log(y);

//3. Comparison operator [ == , === , != , !== , > , < , >= , <= ] T/F
console.log("5"==5); //True compare value only not datatype
console.log(4==5); //False

console.log(5===5); //True compare value + datatype
console.log("5"===5); //False  

console.log("5" !=5); //False compare value not datatype
console.log(4!==5); //True compare value + datatype

console.log(4>5); //False
console.log(4<5); //True

console.log(4<=5); //True
console.log(4>=5); //False

//4. Logical operator [and (&&) or (||) not (!)]
let a = true; 
let b = false;
console.log(a && b); //if both true only true else false
console.log(a || b); //if one will true will true
console.log(!a); //true = false , false = true