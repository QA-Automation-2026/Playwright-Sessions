let a : number = 45
let b : number = 10
let c : number = a-b
console.log(`Difference of two numbers is ${c}`)

c = a**b
console.log(`a to the power of b is ${c}`)

c += 25
console.log(`Value of c after the above operation is ${c}`)

console.log(`Is c greater than 10 x a and 20 x b? ${(c > 10 * a) && (c > 20 * b)}`)