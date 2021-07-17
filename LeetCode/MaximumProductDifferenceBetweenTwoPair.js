var maxProductDifference = function(nums) {
    nums.sort((a,b) => a - b);
    let index1 = nums[nums.length-1];
    let index2 = nums[nums.length-2];
    let index3 = nums[0];
    let index4 = nums[1];
    let difference = (index1 * index2) - (index3 * index4);
    return difference;
};