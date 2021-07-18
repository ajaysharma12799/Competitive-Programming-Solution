function getConcatenation1(nums) { // Fucking Bad Time Complexity and Space Complexity
    let ans1 = [], ans2 = [], concatArray = [];
    nums.forEach(e => ans1.push(e));
    nums.forEach(e => ans2.push(e));
    ans1.forEach(e => concatArray.push(e));
    ans2.forEach(e => concatArray.push(e));
    return concatArray;
};

function getConcatenation2(nums) {
    for(let i in nums) {
        nums.push(nums[i]);
    }
    return nums;
}

let res = getConcatenation2([1,3,2,1]);
console.log(res);