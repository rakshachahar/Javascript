let name = "Raksha"
let greet = `Hello ${name}` // Template literal
console.log(greet);

let str = new String("My name is Raksha");
console.log(str);

// String methods
// 1. Slice (start,end) (original string not changed) -ve indexing too 
console.log(str.slice(1,5));
console.log(str.slice(-6));

// 2. Substring (same as slice) -ve indexing not allowed
console.log(str.substring(1,5));

// 3. Substr (start,length) (both include) -ve indexing allowed
console.log(str.substr(1,5));
console.log(str.substr(-6,4)); 

// 4. includes(substring) // true/false
console.log(str.includes("Rak"));

// 5. startsWith(substring) // true/false
console.log(str.startsWith("Hello"));
console.log(str.startsWith("My"));

// 6. endsWith(substring) // true/false
console.log(str.endsWith("Raksha"));

// 7. trim() - removes whitespace from both ends
let str2 = ("   Hello World   ");
console.log(str2.trim());

// 8. split(separator) - returns array of substrings
let str3 = ("Apple,Cherry,Banana,Cherry");
console.log(str3.split(","));

// 9. replace(oldSubstr, newSubstr) - replaces first occurrence
console.log(str3.replace("Cherry", "Kiwi"));
// multiple replace
console.log(str3.replace(/Cherry/g, "Kiwi"));

// 10. toUpperCase()
console.log(str.toUpperCase());

// 11. toLowerCase()
console.log(str.toLowerCase());

// 12. indexOf(substring) - returns index of first occurrence, -1 if not found
console.log(str.indexOf("Raksha")); //11
console.log(str.indexOf("xyz")); //-1

// 13. charAt(index) - returns character at specified index
console.log(str.charAt(11));

// 14. lastIndexOf(substring) - returns index of last occurrence, -1 if not found
let str4 = "Hello Raksha, Welcome Raksha";
console.log(str4.lastIndexOf("Raksha")); //22

// 15. concat(string2) - joins two or more strings
let str5 = " How are you?";
console.log(str.concat(str5));

// 16. repeat(count) - returns new string with specified number of copies
let str6 = "Ha! ";
console.log(str6.repeat(3));