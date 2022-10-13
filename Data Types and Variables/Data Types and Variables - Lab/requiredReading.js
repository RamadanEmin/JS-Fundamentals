function requiredReading(numberOfPages, readPages, numberOfDays) {
    let timeToReadBook = numberOfPages / readPages;
    let numberOfHours = timeToReadBook / numberOfDays;
    console.log(numberOfHours);
}
requiredReading(212, 20, 2);
requiredReading(432, 15, 4);