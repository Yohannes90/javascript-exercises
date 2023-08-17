const repeatString = function(str, num) {
    new_str = "";
    if (num == 0) {
        return ("")
    } else if (num <= 0) {
        return ("ERROR");
    }
    for (i = 0; i < num; i++) {
        new_str += str;
    }
    return (new_str);
};

// Do not edit below this line
module.exports = repeatString;
