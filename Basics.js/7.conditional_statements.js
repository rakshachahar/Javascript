// if and if else statement

let num = 3
if(num % 2 == 0){
    console.log("I'm Even")
}
else{
    console.log("I'm Odd")
}

//else if 
let n = 12
if(n >=1 && n <=6){
    console.log("Number is small")
}
else if(n>=7 && n<=12){
    console.log("Number is medium")
}
else if(n>=13 && n<=18){
    console.log("Number is large")
}
else{
    console.log("Invalid")
}

//switch-case statements
let day = 0
switch (day) {
    case 1:
        console.log("Monday")
        break;
    case 2:
        console.log("Tuesday")
        break;
    case 3:
        console.log("Wednesday")
        break;
    case 4:
        console.log("Thursday")
        break;
    case 5:
        console.log("Friday")
        break;
    case 6:
        console.log("Saturday")
        break;
    case 0:
        console.log("Sunday")
        break;

    default:
        console.log("Invalid Input")
        break;
}