const sumAll = function(min, max) {
    if (min < 0 || max < 0 ||  !Number.isInteger(min) || !Number.isInteger(max) ) {
        return "ERROR";
    }
    if (max < min) {
        let temp = min;
        min = max;
        max = temp;
    }
    let count = 0;
    for (let i = min; i <= max; i++) {
        count += i;
    }
    return count;
};

// Do not edit below this line
module.exports = sumAll;
