// Creating date obj
let d = new Date();
console.log(d);

// we can also Set values
// dt.setFullYear(2007);

console.log(d.toString()); // String format
console.log(d.toDateString()); 
console.log(d.toLocaleString()); 

console.log(Date.now()); // milliseconds since 1 Jan 1970

// year, month(0-11), date, hours, minutes, seconds, milliseconds
let dt = new Date(2025,11,21 , 10,33,30,0);
console.log(dt);
console.log(dt.getFullYear());
console.log(dt.getMonth());
console.log(dt.getDate());
console.log(dt.getDay()); // 0-Sunday, 1-Monday, ...
console.log(dt.getHours());
console.log(dt.getMinutes());
console.log(dt.getSeconds());
console.log(dt.getMilliseconds());
console.log(dt.getTime()); // milliseconds since 1 Jan 1970

// Create date from string
let ts = new Date(1685667200000); // timestamp in milliseconds
console.log(ts);

// Calculations with dates
let today = new Date();
today.setDate(today.getDate() + 5); // add 5 days
console.log(today);

let pastDate = new Date();
pastDate.setDate(pastDate.getDate() - 10); // subtract 10 days
console.log(pastDate);

// Difference between two dates
let date1 = new Date("2023-06-01");
let date2 = new Date("2023-06-15");
let diffTime = (date2 - date1);
let diffDays = diffTime / (1000 * 60 * 60 * 24); // convert milliseconds to days
console.log(diffDays);