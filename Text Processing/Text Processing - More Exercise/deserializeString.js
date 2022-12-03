function deserializeString(input = []) {
    let output = [];
    while (input.length > 0) {
        let line = input.shift();
        if (line === `end`) {
            break;
        }
        let [char, index] = line.split(`:`);
        let indexes = index.split('/').map(Number);
       for (const i of indexes) {
        output[i]=char;
       }
    }
    return output.join('');
}
console.log(deserializeString([
    'a:0/3/5/11',
    'v:1/4',
    'j:2',
    'm:6/9/15',
    's:7/13',
    'd:8/14',
    'c:10',
    'l:12',
    'end']));