function twoSumInputSorted(nums, target) {
    console.log(nums);
    let i=0;
    let j = nums.length - 1;
    while(i < j) {
        if(nums[i] + nums[j] > target) {
            j--;
        }
        else if(nums[i] + nums[j] < target) {
            i++;
        }
        else {
            return [i,j];
        }
    }
    return false;
}