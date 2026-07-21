// let n: number = 10;
// let a: number = 0;
// let b: number = 1;

// console.log("Fibonacci Series:");

// for (let i = 1; i <= n; i++) {
//     console.log(a);

//     let next = a + b;
//     a = b;
//     b = next;
// }

//Fibonoci Series 

let n: number = 20; // Number of terms
let first: number = 0;
let second: number = 1;
let count: number = 1;

while (count <= n){
    console.log(first);

    let next: number = first + second;
    first = second;
    second = next;

    count++;
} 



