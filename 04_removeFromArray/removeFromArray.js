const removeFromArray = function(array, ...exclude) {
    let result = [];
    
    array.forEach(element => {
        if(!exclude.includes(element)) {
            result.push(element);
        }
    });

    return result;
};

// Do not edit below this line
module.exports = removeFromArray;
