const palindromes = function (str) {
    // make the string case insensitive
    str = str.toUpperCase();
    // remove punctuation and white space from the string
    let regex = /[^a-z0-9]/gi;
    str = str.replace(regex, "");
    str = str.replace(" ", "");
    // reverse the string
    let reversed = str.split("");
    reversed = reversed.reverse();
    reversed = reversed.join("");
    // check palindrome
    if(str === reversed) {
        return true;
    } else {
        return false;
    }
};

// Do not edit below this line
module.exports = palindromes;
