module.exports = function getZerosCount(number) {
    
    var zeros = 0;

    var i = 5;

    while (true) {
        var temp = Math.floor(number / i);

        if (temp >= 1) {
            zeros += temp;
            i *= 5;
        } else {
            break;
        }
    }

    return zeros;
}
