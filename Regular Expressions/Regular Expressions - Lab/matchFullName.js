function matchFullName(names = '') {
    let pattern = /\b[A-Z][a-z]+ [A-Z][a-z]+\b/g;
    let validNames = [];
    let validName='';
    while ((validName = pattern.exec(names)) !== null) {
        validNames.push(validName[0]);

    }
    return validNames.join(' ');
}
console.log(matchFullName("Ivan Ivanov, Ivan ivanov, ivan Ivanov, IVan Ivanov, Test Testov, Ivan	Ivanov"));