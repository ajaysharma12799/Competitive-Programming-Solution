function average(salary) {
    salary.sort((a,b) => a - b);
    salary.shift(); // Remove First Element
    salary.pop(); // Remove Last Element
    let leftSalaryLength = salary.length, average = 0, sum = 0;
    salary.forEach(e => sum += e);
    average = sum / leftSalaryLength;
    return average;
}
