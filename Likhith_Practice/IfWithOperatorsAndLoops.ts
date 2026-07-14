for(let i = 1; i <= 10; i++){
    console.log(i)
}
////////////
for(let i = 20; i >= 1; i -= 2){
    console.log(i)
}
////////////
for(let i = 1; i <= 10; i++){
    console.log("5 * " + i + " = " + (5 *i ))
}
////////////
let h : number = 7
for(let i = 1; i <= 10; i++){
    console.log(h + " * " + i + " = " + (h * i))
}
///////////
for(let i = 1; i <= 20; i++){
    console.log(i)
}
///////////
for(let i = 1; i <= 100; i++){
    if(i % 2 != 0){
        continue;
    }
    console.log(i)
}
////////////
for(let i = 1; i <= 100; i++){
    if(i % 5 == 0)
        console.log(i)

}
///////////
for(let i = 1; i <= 100; i++){
    if(i % 3 == 0 && i % 5 == 0)
        console.log(i)

}
///////////
for(let i = 0; i >= 25; i++){
    console.log(i)
}
///////////
for(let i = 1; i <= 50; i++){
    if(i % 2 !== 0)
        console.log(i)
     
}
///////////
for(let i = 1; i < 25; i++){
    if(i % 2 == 0 && i % 3 !== 0)
        console.log(i)

}
//////////
for(let i = 1; i < 100; i++){
    if(i % 3 == 0 || i % 7 == 0)
        console.log(i)

}
//////////
for(let i = 11; i < 30; i++){
    console.log(i)
}
/////////
for(let i = 1; i < 20; i++){
    if(i == 15){
        continue;
    }
    console.log(i)
}
/////////
for(let i = 1; i < 20; i++){
    if(i == 18){
        break;
    }
    console.log(i)
}
///////
for(let i = 1; i < 50; i++){
    if(i %2 == 0)
        console.log(i)
            if(i % 4 == 0)
                console.log(i)
        }
////////
for (let i = 1; i <= 25; i++){
    if (i % 2 == 0){
        console.log(i)
        if (i % 4 == 0){
            console.log(i + " is also divisible by 4")
        }
    }
}
///////
for (let i = 40; i <= 60; i++){
    if (i % 5 == 0){
        console.log(i)
        if (i > 50){
            console.log(i + " is greater than 50")
        }
    }
}