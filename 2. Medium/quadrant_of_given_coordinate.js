function checkCoordinate (value1, value2) {
    if(value1 == 0 && value2 == 0) {
        console.log('Center');
    }
    else if (value1 > 0 && value2 > 0) {
        console.log('1st Quad');
    }
    else if(value1 < 0 && value2 > 0) {
        console.log('2nd Quad');
    }
    else if(value1 < 0 && value2 < 0) {
        console.log('3rd Quad');
    }
    else if(value1 > 0 && value2 < 0) {
        console.log('4th Quad');
    }
}

checkCoordinate(5, 6)
checkCoordinate(-1, 5)
checkCoordinate(-1, -5)
checkCoordinate(5, -1)
checkCoordinate(0, 0)