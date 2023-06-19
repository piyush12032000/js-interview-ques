//1- '==' & '==='

let a="Mayank";
let b="vipul";
console.log(a==b);
console.log(a===b);

//3-hoisting
let c;                  // Declaration
c = 100;            // Assignment
console.log(c);  

//variable hoisting
console.log(x);
var x = "This is me!";

console.log(x);

//function hoisting
Func_Hoisted();

function Func_Hoisted() {
    console.log("This function is hoisted!");
}

//first class function-
const Too=function(){
    console.log("hello world")
}
Too();
//pure function-
function calculateGST( productPrice ) {
    return productPrice * 0.05;
    }
    //