function mergeArray1(nums1, m, nums2, n) {
    let length = nums1.length;
    let num1Arr = nums1.splice(0, m);
    let num2Arr = nums2.splice(0, n);
    let arr = [...num1Arr, ...num2Arr];
    arr.sort((a,b) => a - b);
    
    nums1.splice(0, length);
    arr.forEach(e => nums1.push(e));
    console.log(arr);
    return nums1;
}
