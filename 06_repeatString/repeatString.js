const repeatString = function(str, amnt) {
    if ((typeof str) !== 'string' || amnt < 0) {
        return 'ERROR';
    }
    let cpy = '';
    for (let i = 0; i < amnt; i++) {
        cpy += str;
    }
    return cpy;
};

// Do not edit below this line
module.exports = repeatString;
