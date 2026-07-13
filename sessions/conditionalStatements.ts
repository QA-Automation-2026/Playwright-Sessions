// conditional statements demo
// if condition - major minor = 18 -  age>=18 = true or false

//if(condition){
// neoifunoiuno
//}

// if(condition){
//     he is the major
// }else{
//     //dfdnfijoijoiuj
// }
// if condition
// if else conditoin
// nested if conditions
//switch cases
// terninary operators


let minimumGraduation :string = "BTech" //- job portal

let candidateQualification :string= "Bsc"

if(minimumGraduation==candidateQualification){
    console.log("Candidate is shortlisted for the interview")
}else{
    console.log("Candidate is not shortlisted for the interview")
}
 let passPercentage : number = 70

 let candidateActualPercentage : number = 80

 if(passPercentage < candidateActualPercentage){
    console.log("Student Passed")
 }else{
    console.log("Student failed")
 }

 // Marks = studnet 35  just pass marks 60 first class 70 above distinction

let studentTarget :number = 70
let justPass :number = 35
let firstClass :number = 60

let studentScore :number = 70;

if(studentScore==justPass || studentScore==studentTarget)
{
    console.log("Student got 35 marks just pass")
     if(studentScore <= studentTarget){
        console.log("Student got 80 marks distinction")}
}
else if(studentScore==firstClass){
    console.log("Student got 60 marks first pass")
}
else if(studentScore <= studentTarget){
 console.log("Student----------------- ")
}
else{
     console.log("Student got zero marks failed ")
}





