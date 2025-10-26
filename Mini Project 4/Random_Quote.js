const quotes = [
    "The best way to predict the future is to invent it. - Alan Kay",
    "Life is 10% what happens to us and 90% how we react to it. - Charles R. Swindoll",
    "The only way to do great work is to love what you do. - Steve Jobs",
    "If you can dream it, you can achieve it. - Zig Ziglar",
    "Success is not final, failure is not fatal: It is the courage to continue that counts. - Winston Churchill"
];

const randomindex = Math.floor(Math.random() * quotes.length);
console.log("Random Quote:");
console.log(quotes[randomindex]);