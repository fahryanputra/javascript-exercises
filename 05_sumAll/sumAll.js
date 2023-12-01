const sumAll = function(number1, number2) {
    if(
        typeof(number1) !== "number" ||
        typeof(number2) !== "number" ||
        number1 < 0 ||
        number2 < 0) {
            return 'ERROR';
    }

    let result = 0;
    let counter = 0;
    let limit = 0;

    if(number1 < number2) {
        counter = number1;
        limit = number2;
    } else{
        counter = number2;
        limit = number1;
    }

    for(counter; counter <= limit; counter++) {
        result += counter;
    }

    return result;
};

// Do not edit below this line
module.exports = sumAll;
