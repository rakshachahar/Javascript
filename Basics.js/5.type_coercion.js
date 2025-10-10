// Type corecion (Implicit Conversion)
//1. String corecion '+' = concatenate

console.log(1 + "23");
console.log(4 + 7+ 1+ "HEllo"); //12HEllo
console.log("HEllo"+ 4 + 7+ 1); //HEllo471

//2. Number corecion'-' , '*, '/' 
console.log("12" * 3); //36
console.log("12" - 3); //9
console.log("12" / 3); //4
console.log("Hello" - 3); //NaN
console.log("Hello" * "World"); //NaN

//3. Boolean corecion
if(4-4){
    console.log("Execute");   
}  
if("Hello"){
    console.log("Execute Hello");   
}