function matchDates(dates = []) {
    let pattern = /(?<day>\d{2})([\/\.-])(?<month>[A-Z][a-z][a-z])\2(?<year>\d{4}\b)/g;
    let validData = null;
    while ((validData = pattern.exec(dates)) !== null) {
        let day = validData.groups.day;
        let month = validData.groups.month;
        let year = validData.groups.year;
        console.log(`Day: ${day}, Month: ${month}, Year: ${year}`);
    }
}
matchDates(['13/Jul/1928, 10-Nov-1934, , 01/Jan-1951,f 25.Dec.1937 23/09/1973, 1/Feb/2016'])
