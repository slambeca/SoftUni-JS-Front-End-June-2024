function studentInformation(studentName, age, averageGrade) {
    result = `Name: ${studentName}, Age: ${age}, Grade: ${averageGrade.toFixed(2)}`
    console.log(result);
}

studentInformation('John', 15, 5.54678)