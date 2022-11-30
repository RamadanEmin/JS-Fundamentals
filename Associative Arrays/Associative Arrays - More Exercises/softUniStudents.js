function softUniStudents(input = []) {
    let registry = {};
    for (const line of input) {
        if (line.includes(`:`)) {
            let [courseName, capacity] = line.split(`: `);
            capacity = Number(capacity);
            if (!registry.hasOwnProperty(courseName)) {
                registry[courseName] = { students: [], capacity };
            } else {
                registry[courseName].capacity += capacity;
            }
        } else {
            let [username, creditsCount, email, courseName] = line
                .replace(`[`, ` `)
                .replace(`] with email `, ` `)
                .replace(` joins `, ` `)
                .split(` `);
            creditsCount = Number(creditsCount);
            let student = [creditsCount, username, email]
            if (registry.hasOwnProperty(courseName)) {
                if (registry[courseName].capacity > 0) {
                    registry[courseName].students.push(student);
                    registry[courseName].capacity--;
                }
            }
        }
    }
    let sortedRegistry = Object.entries(registry).sort((a, b) => b[1].students.length - a[1].students.length);
    for (const [course, students] of sortedRegistry) {
        console.log(`${course}: ${students.capacity} places left`);
        let sortedStudents = Object.entries(students.students).sort((a, b) => b[1][0] - a[1][0]);
        for (const [key, value] of sortedStudents) {
            console.log(`--- ${value[0]}: ${value[1]}, ${value[2]}`);
        }
    }
}
softUniStudents([
    'JavaBasics: 2', 'user1[25] with email user1@user.com joins C#Basics',
    'C#Advanced: 3', 'JSCore: 4', 'user2[30] with email user2@user.com joins C#Basics',
    'user13[50] with email user13@user.com joins JSCore',
    'user1[25] with email user1@user.com joins JSCore',
    'user8[18] with email user8@user.com joins C#Advanced',
    'user6[85] with email user6@user.com joins JSCore', 'JSCore: 2',
    'user11[3] with email user11@user.com joins JavaBasics',
    'user45[105] with email user45@user.com joins JSCore',
    'user007[20] with email user007@user.com joins JSCore',
    'user700[29] with email user700@user.com joins JSCore',
    'user900[88] with email user900@user.com joins JSCore'
]);