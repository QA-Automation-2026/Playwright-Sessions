"use strict";
//Simple
let FreeCoffee = 10;
let FreeDonut = 25;
let FreeCake = 50;
let UserRewardPoints = 5;
if (UserRewardPoints >= FreeCake) {
    console.log("You are eligible for a free cake");
}
else if (UserRewardPoints >= FreeDonut) {
    console.log("You are eligible for a free donut");
}
else if (UserRewardPoints >= FreeCoffee) {
    console.log("You are eligible for a free coffee");
}
else {
    console.log("Keep shopping for more Reward Points");
}
//including logical operators
let FreeCoffee = 10;
let FreeDonut = 25;
let FreeCake = 50;
let UserRewardPoints = 60;
let isPremiumMember = true;
let dayOfWeek = "Saturday";
if (UserRewardPoints >= FreeCake && isPremiumMember == true && dayOfWeek == "Saturday") {
    console.log("You get a Free Cake + Frosting Upgrade + a Free Chocolate");
}
else if (UserRewardPoints >= FreeCake && isPremiumMember == true) {
    console.log("You get a Free Cake + Frosting Upgrade");
}
else if (UserRewardPoints >= FreeCake && dayOfWeek == "Saturday") {
    console.log("You get a Free Cake + a Free Chocolate");
}
else if (UserRewardPoints >= FreeCake) {
    console.log("You get a Free Cake");
}
else if (UserRewardPoints >= FreeDonut && isPremiumMember == true && dayOfWeek == "Saturday") {
    console.log("You get a Free Pistachio Cream Donut + a Free Chocolate");
}
// Case B: Premium Only
else if (UserRewardPoints >= FreeDonut && isPremiumMember == true) {
    console.log("You get a Free Pistachio Cream Donut");
}
else if (UserRewardPoints >= FreeDonut && dayOfWeek == "Saturday") {
    console.log("You get a Free Donut + a Free Chocolate");
}
else if (UserRewardPoints >= FreeDonut) {
    console.log("You get a Free Donut");
}
else if (UserRewardPoints >= FreeCoffee && isPremiumMember == true && dayOfWeek == "Saturday") {
    console.log("You get a Free Large Coffee + a Free Chocolate");
}
else if (UserRewardPoints >= FreeCoffee && isPremiumMember == true) {
    console.log("You get a Free Large Coffee");
}
else if (UserRewardPoints >= FreeCoffee && dayOfWeek == "Saturday") {
    console.log("You get a Free Coffee + a Free Chocolate");
}
else if (UserRewardPoints >= FreeCoffee) {
    console.log("You get a Free Coffee");
}
else {
    console.log("Keep shopping for more Reward Points!");
}
