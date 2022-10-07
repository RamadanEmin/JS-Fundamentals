function studentInformation(arg1, arg2, arg3) {
    let studentName = arg1;
    let studentAge = arg2;
    let studentGrade = arg3;
    console.log(`Name: ${studentName}, Age: ${studentAge}, Grade: ${studentGrade.toFixed(2)}`);
}
studentInformation('John', 15, 5.54678)
