// Nested If conditions

// pass marks 50 = 30 +20 pass fail
//30 members pass - above 80 = 10
//90 marks - 4 members
//100 marks - 2 members


let marks :number= 89

if(marks>=35){
    console.log("Student got pass marks")
    if(marks>=80){
        console.log("Pass Marks are greater than equal to 80")
        if(marks>90){
            console.log("Pass Marks are greater than equal to 90")
        }else{
            console.log("No students is scored 90 marks")
        }
    }
}else{
     console.log("all are failed")
}
