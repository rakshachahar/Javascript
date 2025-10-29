let arr = [ 1,23,53,3,56];
let fruits = [ "orange", "mango", "kiwi"];
let mixed = [ 17, "Hello" , true, 62,63]

console.log(arr);
console.log(fruits);
console.log(mixed);

// Array constructor
let colors = new Array("red", "green", "blue");
console.log(colors);

// Array.of()
let color = Array.of("pink", "purple", "cyan");
console.log(color);

// Array.from()
let str = "Hello";
let arr1 = Array.from(str);
console.log(arr1); //['H','e','l','l','o']

// Accessing array elements
console.log(arr[0]); //1
console.log(fruits[2]); //kiwi
console.log(mixed[3]); //62

// Modifying array elements
arr[1] = 45;
console.log(arr); //[1, 45, 53, 3, 56]
console.log(fruits.length); //3
console.log(fruits[4]); //undefined

// Traversing in arrays
for ( let i = 0; i<fruits.length; i++){
    console.log(fruits[i]);
}

// for..of loop
let nums = [ 5,10,15,20];
for (let num of nums){
    console.log(2*num);
}

// forin loop
for (let index in colors){
    console.log(colors[index]);
}

// // forEach() method
// array.forEach(function(value, index, array){
//     // code 
// });
// array.forEach((value, index,array) => {
//     // code
// });

// fruits.forEach (function(fruits, index){
//     console.log(fruits , index);
// })

// Arrow function in forEach()
fruits.forEach((fruits, index) => {
    console.log(fruits, index);
});

let n = [ 2,4,6,8,10];
n.forEach(function (value, index , ar) {
    ar[index] = value * 2;
})
console.log(n);

// Map() iterate an arr alternative to loop
// provide new not update it only no change in original
// return new array compulsorily length same as original
// array.map((value, index, array) => { //code })
let numbers = [ 1,2,3,4,5];
let squared = numbers.map((numbers) => {
    return numbers * numbers;
});
console.log(squared); //[1,4,9,16,25]
console.log(numbers); //[1,2,3,4,5] no change in original

// Filter() method
// create new array with elements that pass a test
// array.filter((value, index, array) => { //code })
let mixedNumbers = [ 10,15,20,25,30,35];
let evenNumbers = mixedNumbers.filter((Numbers) => {
    return Numbers % 2 === 0;
});
console.log(evenNumbers);

// Reduce() method (array to single value)
// array.reduce((accumulator, currentValue, index, array) => { //code }, initialValue)
let values = [ 1,2,3,4,5];
let sum = values.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
}, 0);
console.log(sum); //15
let values1 = [ 1,2,3];
let mul = values1.reduce((accumulator, currentValue) => {
    return accumulator * currentValue;
}, 1);
console.log(mul); 

// chainning map , filter , reduce
let result = [ 1,2,3,4,5,6]
let m1= result.map((num) => num * 2) // [2,4,6,8,10,12]
let f1= result
    .filter((num) => num > 5) 
    .reduce((acc, num) => acc + num , 0); 
console.log(result);
console.log(m1);
console.log(f1);