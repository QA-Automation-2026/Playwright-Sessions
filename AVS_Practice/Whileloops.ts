let a : number = 1
while (a <= 10){
    if (a % 2 === 0){
        console.log(a + " is Even")
    }else{
        console.log(a + " is Odd")
    }
    a++
}
////////////////
let x : number = 0
let y : number = 1
while (x <= 15){
    console.log(x)
    let next = x + y
    x = y
    y = next
}
/////////////////

