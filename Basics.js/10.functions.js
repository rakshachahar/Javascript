//1.Normal function
greet(); //support hoisting

function greet() {
    console.log("Hello!I'm a function");
}

//2.Function expression (when store in variable )
let greet2 = function(){
    console.log("Hello!I'm a function expression");
    return 10; // not undefined
}
console.log(greet2()); //does not support hoisting

//3.Parameters and Arguments
function add(a,b=0){   //b=0 default value
    console.log(a+b); //parameters(a,b)
}
add(8,9); //arguments(actual m pass krva rhe h)
add(8,7,1); //extra argument ignored
add(5); //b=undefined =>NaN

//4.rest parameter
function add(...num){  
    let result = 0;
    for(value of num){
        result += value;
    }
    console.log(result)}
add(8,9);
add(1,4,6,3,4);

//5.this operator
console.log(this); //empty parenthesis{} in nodejs(window object in browser)
let user = {
    name : "Raksha",
    greetUser : function(){
        console.log(this.name);
    }   
}
user.greetUser(); //this refer to user object
function greet3(){
        console.log(this);} //this refer to global object
        //this.fetch (function)
        greet3(); 

//6.Arrow function (ES6 )
//one parameter
let val = ()=>{console.log("I'm an arrow function");}
(val());

//multiple parameter
let n = (name)=>console.log(name);
n("Raksha");

let square = (num)=> {
    return num*num;     
}
console.log(square(6));

//single statement no need return and {}
let square1 = (num1)=> num1*num1; 
console.log(square1(9));

let add1 = (a,b) =>{
    console.log("Hello! I'm addition function");
    return a+b;
}
console.log(add1(4,3));

//without parenthesis and return undefined it suppose function block
const createuser = (name,age) => {
    return {name, age}
}
console.log(createuser("Raksha",17));
console.log(createuser("Alice",20));

// cannot use this keyword in arrow function
let user1 = {
    name : "Raksha",
    greetUser : ()=>{
        console.log(this.name); //{}
    }   
}
user1.greetUser();

//7.IIFE (Immediately Invoked Function Expression)
(function(){
    console.log("I'm IIFE function");
})();

let sub = (function(a,b){
    return a-b;
})(10,4);
console.log(sub);