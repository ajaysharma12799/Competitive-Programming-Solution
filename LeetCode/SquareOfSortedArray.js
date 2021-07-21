function squareSorted(arr) {
    let res = arr.map(e => e * e);
    res.sort((a,b) => a - b);
    return res;
}

let result = squareSorted([-7,-3,2,3,11]);
console.log(result);