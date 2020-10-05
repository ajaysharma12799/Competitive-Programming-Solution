function swap1 (value1, value2) { // Approach One
    let a = value1, b = value2;

    a = a + b;
    b = a - b;
    a = a - b;

    return (
        {
            a: a,
            b: b
        }
    );
}

const { a, b } = swap1(1, 2);
console.log(`a = ${a} b = ${b}`)