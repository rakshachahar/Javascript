// input = string
// output = word count , char count (with or without spaces), longest , shortest word, avg word len

const readline = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question("Enter a string: ", (sentence)=>{
    const trimmedSentence = sentence.trim(); // My name            is           Raksha
    
    const words = trimmedSentence.split(/\s+/); // split by one or more spaces
    const wordCount = words.length;

    const charCountWithSpace = trimmedSentence.length; // length with spaces
    const charCountWithoutSpace = trimmedSentence.replace(/\s+/g, '').length; 
    // /\s+/g  -> \s space , + one or more , g global replace all spaces with ''

    let longestWord = "";
    let shortestWord = words[0]; // initialize with first word
    for (let word of words){
        if(word.length > longestWord.length){
            longestWord = word;
        }
        if(word.length < shortestWord.length){
            shortestWord = word;
        }
    }
    const avgWordLength = (charCountWithoutSpace / wordCount).toFixed(2);

    console.log("Word Analysis: ");
    console.log(`Word Count: ${wordCount}`);
    console.log(`Characters (with spaces): ${charCountWithSpace}`);
    console.log(`Characters (without spaces): ${charCountWithoutSpace}`);
    console.log(`Longest Word: ${longestWord}`);
    console.log(`Shortest Word: ${shortestWord}`);
    console.log(`Average Word Length: ${avgWordLength}`);

    readline.close();
})