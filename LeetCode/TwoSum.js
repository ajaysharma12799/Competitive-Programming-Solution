function twoSum(nums, target) {
    let map = {};
    for (let index = 0; index < nums.length; index++) { // Storing Array Element in Map
        let element = nums[index];
        map[element] = index;
    }
    for (let index = 0; index < nums.length; index++) {
        let diff = target - nums[index];
        if(map.hasOwnProperty(diff) && map[diff] !== index) {
            return [index, map[diff]];
        }
    }
};
