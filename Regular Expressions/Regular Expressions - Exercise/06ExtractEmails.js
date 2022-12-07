function extractEmails(input = '') {
    let pattern = /(?<!\S)[A-Za-z0-9]+([\.\-\_]*[A-Za-z0-9]+)*@[A-Za-z]+([\.\-\_]*[A-Za-z]+)*\.[A-Za-z]+/g;
    let emails = input.match(pattern);
    for (const email of emails) {
        console.log(email);
    }
}
extractEmails('Please contact us at: support@github.com.')