function companyUsers(input = []) {
    let companies = {};
    for (const line of input) {
        let [companyName, employeeId] = line.split(` -> `);
        if (companies[companyName] === undefined) {
            companies[companyName] = new Set();
        }
        companies[companyName].add(employeeId);
    }
    let sortCompanies = Object.entries(companies).sort((a, b) => a[0].localeCompare(b[0]));
    for (const [company, employees] of sortCompanies) {
        console.log(`${company}`);
        for (const employee of employees) {
            console.log(`-- ${employee}`);
        }
    }
}
companyUsers([
    'SoftUni -> AA12345',
    'SoftUni -> CC12344',
    'Lenovo -> XX23456',
    'SoftUni -> AA12345',
    'Movement -> DD11111'
]);