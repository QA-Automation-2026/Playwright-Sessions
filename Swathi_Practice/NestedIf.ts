let Age: number = 25;
let hasLicense: boolean = true;

if (Age >= 18) {
    if (hasLicense) {
        console.log("You are eligible to drive.");
    } else {
        console.log("You are old enough, but you need a driver's license.");
    }
} else {
    console.log("You are not old enough to drive.");
}