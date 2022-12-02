function cutAndReverse(input = '') {
    let output = [];
    let midIndex = input.length / 2;
    let firstHalf = input.substring(0, midIndex).split('').reverse().join('');
    let secondHald = input.slice(midIndex).split('').reverse().join('');
    output.push(firstHalf, secondHald);
    return output.join('\n');
}
console.log(cutAndReverse('tluciffiDsIsihTgnizamAoSsIsihT'));
