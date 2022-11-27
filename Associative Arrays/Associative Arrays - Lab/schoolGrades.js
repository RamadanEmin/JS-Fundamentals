function schoolGrades(input = []) {
    let students = new Map();
    for (const line of input) {
        let tokens = line.split(` `);
        let name = tokens.shift();
        let grades = tokens.map(Number);
        if (students.has(name)) {
            grades = students.get(name).concat(grades);
        }
        students.set(name, grades);
    }
    let sortedStudents = Array
        .from(students.entries())
        .sort((a, b) => a[0].localeCompare(b[0]))
        .map(([el0, el1]) => {
            return [el0, el1.reduce((a, b) => a + b, 0) / el1.length]
        });
    for (const [student, averageGrade] of sortedStudents) {
        console.log(`${student}: ${averageGrade.toFixed(2)}`);
    }
}
schoolGrades([
    'Steven 3 5 6 4',
    'George 4 6',
    'Tammy 2 5 3',
    'Steven 6 3'
]);