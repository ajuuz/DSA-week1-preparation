const primeChecker = (value,divider) => {

    if(divider<2) return true;

    if(value%divider===0) return false;

    return primeChecker(value,divider-1);
}

const value=13;
const divider = Math.floor(value/2)

console.log(primeChecker(value,divider))