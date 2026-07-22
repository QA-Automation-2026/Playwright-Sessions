async function demo1():Promise<void>{

    const numbers = [10,20,30,40,50,60,70,80]
                //    0  1  2 3  4

   

    // for(let i = 0;i<numbers.length;i++){
    //     console.log(numbers[i])
    // }

    for(const n of numbers)
    {
         console.log("Number of values in the array is " +numbers.length)
        console.log(n)
    }
    
}

demo1();