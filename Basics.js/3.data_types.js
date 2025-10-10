//PRIMITIVE DATATYPES (immutable)
//1. Number
let a= 10;
console.log(typeof(a));

//2. String
let name = "raksha"
console.log(typeof name)

//3. Boolean
let is_valid = true
console.log(typeof is_valid)

//4. Undefined (abhi define ni kia h)
let no;
console.log(typeof no)

//5. Null (object) (ye khali h)
let empty = null;
console.log(typeof empty);

//6. BigInt
let big_num = 4377828279834274357n;
console.log(typeof big_num);

//7. Symbol
let id1 = Symbol("id"); 
let id2 = Symbol("id"); //unique
console.log(id1 == id2); //FALSE
console.log(typeof id1);

//NON - PRIMITIVE DATATYPES (mutable)
// 1. array
let arr = ["Raksha" , true , 12, 1273 , 3.14 , "Priya"]
console.log(arr);
console.log(typeof arr);

//2. object
let user =  {
    name: "raksha",
    age: 17,
    phone_no: 9876543210,
    category: "general",
    is_validUser: true
}
console.log(user);
console.log(typeof user);
console.log(user.phone_no);

//3. function
function add(){
    console.log(1+7);
}
add()

let func_value = function sub(){
    console.log(7- 1);
}
console.log(func_value())