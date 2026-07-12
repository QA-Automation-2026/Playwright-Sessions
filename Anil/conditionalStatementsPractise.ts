let eligibleAge : number = 18
let member1Age : number = 17

if (member1Age >= eligibleAge )
{
    console.log("You are eligible for voting")
} 
else 
{
    console.log("You are not eligible for voting")
}

let course1 : string = "BSC"
let eligiblePass1 : number = 30
let eligibleFirstClass1 : number = 60
let eligibleDistinction1 : number = 70
let studentMarks1 : number = 50
let studentCourse1 : string = "BSC"

let course2 : string = "BTech"
let eligiblePass2 : number = 35
let eligibleFirstClass2 : number = 65
let eligibleDistinction2 : number = 75
let studentMarks2 : number = 70
let studentCourse2 : string = "BTech"

if (course2 == studentCourse2 && studentMarks2 >= eligibleDistinction2)
{
    console.log("Btech student with Distinction")
}
else if (course2 == studentCourse2 && studentMarks2 >= eligibleFirstClass2)
    {
        console.log("Btech student with FirstClass")
}
else if (course2 == studentCourse2 && studentMarks2 >= eligiblePass2) {
        console.log("Btech student with Passmarks")
}
else
{
       console.log("Btech student with Failed")
}

//

if ((course2 == studentCourse2 && studentMarks2 >= eligibleDistinction2) || (course1 == studentCourse1 && studentMarks1 >= eligibleDistinction1))
{   
    console.log("Student with Distinction")
}
else if ((course2 == studentCourse2 && studentMarks2 >= eligibleFirstClass2) || (course1 == studentCourse1 && studentMarks1 >= eligibleFirstClass1))
    {
        console.log("Student with FirstClass")
}
else if ((course2 == studentCourse2 && studentMarks2 >= eligiblePass2) || (course1 == studentCourse1 && studentMarks1 >= eligiblePass1)) {
        console.log("student with Passmarks")
}
else
{
       console.log("Student with Failed")
}