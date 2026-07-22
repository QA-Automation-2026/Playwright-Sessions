// Welcome script
class DemoTS{

 showMessage(): void {

    console.log("Welcome to TypeScript");
}

}

let DemoClass = new DemoTS
DemoClass.showMessage();

////////////// Add 1 to 10 numbers  ///////////////////

class Adding{ // Adding is a class

    addnumbers(): void{  // addnumbers is a function
    let add: number = 0;
    console.log("Numbers from 1 to 10:");
for (let i: number = 1; i <= 10; i++) {
     console.log(i); // numbers 1 to 10 print 
    add = add + i;  // adding numbers
}
    console.log("Sum of numbers from 1 to 10 is:", add); // print sum of numbers
 }
}

let obj = new Adding // obj is object
obj.addnumbers();    // calling function with obj


////  add list of names and return total name  ///////

class Names{
    displayNames(): number{
        let names: string[] = ["swathi", "jyothi", "vidhu", "kishore", "kumar"];
        let i: number =0;
        console.log("List of Names" );
    do {
        console.log(names[i]);
        i++;
} while (i < names.length);
  return names.length;
}
}
let total = new Names
let z = total.displayNames();

console.log("Total Names are :", z);





// class newfunction{

//     // Syntax
//     // function name(params:type) : return type{
        
//     // }
    
//     // Zero parameters with no return type
//     // Parameters with return type

//     addition(a:number, b :string) : boolean{

//         console.log(`Addition of two numbers ${b}`)
//         let c = "return some statement"
//         return false
//         }
//     subtraction(){

//     }
//     multiplication(){

//     }
    
    

// }
// const obj = new demo();
// let total = obj.addition(15,'25');
// console.log("Total is : "+total)


// // add numbers from 1 to 10 and no return statement
// // add list of names and return total name
