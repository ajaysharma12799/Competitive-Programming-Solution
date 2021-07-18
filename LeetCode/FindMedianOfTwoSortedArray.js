function medianOfTwoSortedArray(num1, num2) {
    let mergedArray = [...num1, ...num2];
    mergedArray.sort((a,b) => a-b);
    let length = mergedArray.length, median = 0;
    if(length % 2 === 0) {
        let n_2Term = (length / 2) - 1;
        let n_3Term = n_2Term + 1;
        median = (mergedArray[Math.floor(n_2Term)] + mergedArray[Math.floor(n_3Term)]) / 2;
    }
    else {
        let n_Term = ((length + 1) / 2 ) - 1;
        median = mergedArray[Math.floor(n_Term)];
    }
    return median;
}
