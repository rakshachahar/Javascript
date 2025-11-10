// Basic array methods
// 1.indexOf()
let fruits = ["apple", "banana", "kiwi", "mango", "banana"];
console.log(fruits.indexOf("banana")); //1
console.log(fruits.indexOf("grape")); //-1(not present in array)

// 2.lastIndexOf()
console.log(fruits.lastIndexOf("banana")); //4
console.log(fruits.lastIndexOf("grape")); //-1

// 3.includes()
console.log(fruits.includes("kiwi")); //true
console.log(fruits.includes("grape")); //false

// 4.push()
fruits.push("orange"); //insert at end
console.log(fruits); //["apple", "banana", "kiwi", "mango", "banana", "orange"]

// 5.pop()
let lastFruit = fruits.pop();
console.log(lastFruit); //orange
console.log(fruits); //["apple", "banana", "kiwi", "mango", "banana"]

// 6. unshift()
fruits.unshift("grape"); // insert at beginning
console.log(fruits); //["grape", "apple", "banana", "kiwi", "mango", "banana"]

// 7. shift()
let firstFruit = fruits.shift(); // remove from beginning
console.log(firstFruit); //grape
console.log(fruits); //["apple", "banana", "kiwi", "mango", "banana"]

// 8. concat()
let tropicalFruits = ["pineapple", "papaya"];
let allFruits = fruits.concat(tropicalFruits);
console.log(allFruits); //["apple", "banana", "kiwi", "mango", "banana", "pineapple", "papaya"]

// 9. slice()
let citrusFruits = allFruits.slice(2,5); //from index 
console.log(citrusFruits); //["kiwi", "mango", "banana"]

// 10. join()
let fruitString = allFruits.join(", "); // convert array to string 
console.log(fruitString); //"apple, banana, kiwi, mango, banana, pineapple, papaya"

// 11. reverse()
let reversedFruits = allFruits.reverse();
console.log(reversedFruits); //["papaya", "pineapple", "banana", "mango", "kiwi", "banana", "apple"]

// 12. sort()
let sortedFruits = allFruits.sort();
console.log(sortedFruits); //["apple", "banana", "banana", "kiwi", "mango", "papaya", "pineapple"]