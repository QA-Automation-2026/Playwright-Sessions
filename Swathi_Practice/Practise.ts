
// for(let i = 24 ; i>=12; i--){
//      if(i==20){
//         continue;
//     }
//     console.log(" 2 * "+ i+" = "+(2*i))

// }

// let num: number = 7; // Change this value or get input from the user

// for (let i = 1; i <= 10; i++) {
//     console.log(num+ " * " +  i+" = "+(num * i));
// }  


// for(let i = 24 ; i>=12; i--){
//      if(i==20){
//         continue;
//     }
//     console.log(i);

// }


// for (let i = 1; i <= 100; i++) {
//     if (i > 20) {
//         if (i % 2 === 0) {
//             console.log(i);
//         }
//     }
// }

  
let i : number = 1
for ( i = 1; i <= 100; i++) {
    if (i % 2 === 0) {
        if (i % 4 === 0) {
            console.log(i + " is divisible by 2 and 4");
        } else {
            console.log(i + " is divisible by 2 only");
        }
    }
}