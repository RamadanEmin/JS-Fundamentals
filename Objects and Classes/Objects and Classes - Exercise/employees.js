function employees(input = []) {
    let employees = [];
    class Employees {
        constructor(employeeName, personalNum) {
            this.employeeName = employeeName;
            this.personalNum = personalNum;
        }
    }
    for (let i = 0; i < input.length; i++) {
        let employeeName = input[i];
        let personalNum = input[i].length;
        let personal = new Employees(employeeName, personalNum);
        employees.push(personal);
    }
    for (const employe of employees) {
        console.log(`Name: ${employe.employeeName} -- Personal Number: ${employe.personalNum}`);
    }
}
employees(
    ['Silas Butler',
        'Adnaan Buckley',
        'Juan Peterson',
        'Brendan Villarreal']);