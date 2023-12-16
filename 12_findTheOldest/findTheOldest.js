const findTheOldest = function(arr) {
    // replace missing yearOfDeath with current year
    const currentYear = new Date().getFullYear();
    arr.forEach(item => {
        if(!item.yearOfDeath) {
            item.yearOfDeath = currentYear;
        }
    })
    const oldest = arr.sort((a, b) => (a.yearOfDeath - a.yearOfBirth) < (b.yearOfDeath - b.yearOfBirth) ? 1 : -1);
    return oldest[0]
};

// Do not edit below this line
module.exports = findTheOldest;
