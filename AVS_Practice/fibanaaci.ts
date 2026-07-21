let var1 : number = 0
let var2 : number = 1

let series : number = 10;

for (let count: number = 1; count <=series; count++)
 {
    console.log(var1)
    let var3: number = var1 + var2 
    var1 = var2
    var2 = var3
 }