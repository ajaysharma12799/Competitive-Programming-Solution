function findFactors (value) {
    let factor = [];
    for(let i = 1; i<= value; i++) {
        if(value % i == 0) {
            factor.push(i);
        }
    }
    factor.forEach( (item) => {
        console.log(item);
    } )
}

findFactors(6);