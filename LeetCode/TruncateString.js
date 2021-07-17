var truncateSentence = function(s, k) {
    let stringArray = s.split(" ");
    let newStringArray = []
    for(let i=0; i<k; i++) {
        newStringArray.push(stringArray[i]);
    }
    return newStringArray.join(" ");
};