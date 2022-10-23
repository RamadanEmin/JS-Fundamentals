function nonDecreasingSubset(arr = []) {
    /*   let resultArr = [];
        resultArr.push(arr[0]);
        for (let i = 1; i <= arr.length - 1; i++) {
            if (resultArr[resultArr.length - 1] <= arr[i]) {
                resultArr.push(arr[i]);
            } else {
                continue;
            }
        }
        console.log(resultArr.join(` `));                  */
        console.log(arr.filter((el,index)=>el>=Math.max(...arr.slice(0,index))).join(` `));
}
nonDecreasingSubset([ 1, 3, 8, 4, 10, 12, 3, 2, 24]);