let  age : number = 20;
if (age>=18){
 console.log("True")
}else {
    console.log("false")
}

// Grade

let score: number = 82;

if (score >= 90) {
    console.log("Grade A");
} else if (score >= 75) {
    console.log("Grade B");
} else if (score >= 60) {
    console.log("Grade C");
} else {
    console.log("Grade D");
}

// Username

let username: string = "admin";
let password: string = "Admin123";

if (username === "admin") {
    if (password === "Admin123") {
        console.log("Login successful.");
    } else {
        console.log("Invalid password.");
    }
} else {
    console.log("Invalid username.");
}