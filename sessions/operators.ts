// Arthimetic Operators

let a :number = 10
let b : number = '10'

let c : number = a+b

console.log(`Addition of Two Numbers is ${c}`)

c = a-b
console.log(`Subtraction of Two Numbers is ${c}`)

c = a*b

console.log(`Multiplication of Two Numbers is ${c}`)

let output : boolean = a===b

console.log(`a is equal to b  ${!output}`)

a = 5;
b = 4;

console.log(`a is greater than b  ${a<=b || b>=a}`)
    
function f(number1 ? : string){
    //number1 = "16"
    console.log(number1)
}
f("15");
f();

