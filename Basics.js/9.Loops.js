//1. for loop
for (let i = 0; i < 5; i++) {
    console.log("Hello in for loop");
}

//2. while loop
let n = 1;
while (n < 5) {
    console.log("Hello in while loop");
    n++;
}

//3. do while loop
let x = 1;
do{
    console.log("Hello in do while loop");
    x++;
}
while (x < 5);

//4. for...in loop
//  object keys , array index 
let obj = {
    name: "John",
    age: 30,
    city: "New York",
    is_valid: true
}

for (key in obj) {
    console.log(key + ": " + obj[key]);
}    

//5. for...of loop
// arrays, string, iterables
let arr = [10, 20, 30, 40, 50];
for (let value of arr) {
    console.log(value);
}   
let fruits = ["Apple", "Banana", "Cherry"];
for (let value of fruits) {
    console.log(value);
}   

//6. break and continue statement
for (let i = 0; i < 10; i++) {
    if (i === 5) {
        break; // exit the loop when i is 5
    }
    console.log(i);
}

for (let i = 0; i < 10; i++) {
    if (i % 2 === 0) {
        continue; // skip the even numbers
    }
    console.log(i); // print only odd numbers
}

//7. Nested loops
for (let i = 1; i <= 3; i++) {
    for (let j = 1; j <= 3; j++) {
        console.log(`i = ${i}, j = ${j}`);
    }
}