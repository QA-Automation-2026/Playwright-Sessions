// let var1 : number = 0
// let var2 : number = 1

// let series : number = 10;

// for (let count: number = 1; count <=series; count++)
//  {
//     console.log(var1)
//     let var3: number = var1 + var2 
//     var1 = var2
//     var2 = var3
//  }


function reverseNumber(num ?: number)
{
    num = 12;
    let reversed: number = 0;

    // Loop until all digits are extracted
    while (num > 0)
    {
        let lastDigit: number = num % 10 
    //console.log(lastDigit)  // 2
        reversed = (reversed * 10) + lastDigit
        num = Math.floor(num / 10)
    }
    console.log(reversed)
    
}

reverseNumber(25)
reverseNumber(40)
reverseNumber(55)

//Lamda function l1 => l2
//async function + await

