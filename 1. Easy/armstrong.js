function checkArmstrong (value) {
    let copiedValue = value, remainder = 0, armstrong = 0, length = 0;
    while (copiedValue != 0) {

        length = value.toString().length; // converting number into string and then calculating its length

        remainder = copiedValue % 10;
        armstrong = armstrong + Math.pow(remainder, length);
        copiedValue = Math.floor(copiedValue / 10);
    }
    console.log(armstrong);
    return armstrong == value ? true : false;
}

checkArmstrong(371) ? console.log('Armstrong') : console.log('Not Armstrong');