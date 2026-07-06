var number : number = 123456
let l : number = 546
const c : string = "total value"
let total : number = number+l
console.log(total)

var i = c+"  "+total
console.log(i)

var names : string = "veerababu"

var dashboard :string = `Welcome ${names}`
console.log(dashboard)

let firstName: string = "Veeru";
let message: string = `Welcome ${firstName}`;

console.log(message)

const rahul1 = Symbol("Rahul");
const rahul2 = Symbol("Rahul");

const employees = {
    [rahul1]: "EMP1001",
    [rahul2]: "EMP1002"
};

console.log(employees[rahul1]);
console.log(employees[rahul2]);
