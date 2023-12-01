const reverseString = function(text) {
    let result = "";
    for(let i = text.length - 1; i >= 0; i--) {
        result += text[i];
    }
    return result;
};

// Do not edit below this line
module.exports = reverseString;
