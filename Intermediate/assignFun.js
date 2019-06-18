let marks = function(currentMarks, totalMarks){
    per = (currentMarks/totalMarks)*100

    myGrade = ''

    if(per >= 90){
        myGrade = 'A'
    }else if(per >= 70){
        myGrade = 'B'
    }else if(per >= 60){
        myGrade = 'C'
    }else{
        myGrade = 'F'
    }

    return `Your Grade is ${myGrade} and Percentage is ${per}`
}

console.log(marks(92, 100))