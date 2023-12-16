const fibonacci = function(num) {
    if(num < 0) {
        return "OOPS";
    }
    let arr = [];
    for(let i = 0; i <= +num; i++) {
        if(i === 0) {
            arr.push(0);
        } else if(i === 1) {
            arr.push(1);
        } else {
            arr.push(arr[i - 1] + arr [i - 2]);
        }
    }

    return arr[num];
};

// Do not edit below this line
module.exports = fibonacci;
