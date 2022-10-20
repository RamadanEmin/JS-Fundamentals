function equalSums(array = []) {
    let isEqual = false;
    for (let i = 0; i < array.length; i++) {

        let sumRightElements = 0;
        for (let j = array.length - 1; j > i; j--) {
            // right elemnts
            let currentElement = array[j];
            sumRightElements += currentElement;
        }
        let sumLeftElements = 0;
        for (let k = 0; k < i; k++) {
            // left elemnts
            let currentElement = array[k];
            sumLeftElements += currentElement;
        }
        if (sumLeftElements === sumRightElements) {
            isEqual = true;
            console.log(i);
            break;
        }
    }
    if(!isEqual){
        console.log(`no`);
    }
}
equalSums([1, 2, 3, 3]);
equalSums([32]);