function fibonacciUptoN (value) {
    let a = 0, b = 1, c = 0;
    console.log('0');
    console.log('1');
    for(let i = 1; i <= value; i++) {
        c = a + b;
        a = b;
        b = c;
        console.log(c);
    }
}

fibonacciUptoN(5);