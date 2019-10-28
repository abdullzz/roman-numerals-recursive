function toRoman(num) {
    var dict = {
        M: 1000,
        CM: 900,
        D: 500,
        CD: 400,
        C: 100,
        XC: 90,
        L: 50,
        XL: 40,
        X: 10,
        IX: 9,
        V: 5,
        IV: 4,
        I: 1
    }
    if (num === 0) {
        return '';
    }
    for (var key in dict) {
        if (num >= dict[key]) {
            return key + toRoman(num - dict[key]);
        }
    }
}

console.log(toRoman(4));
console.log(toRoman(9));
console.log(toRoman(23));
console.log(toRoman(1646));

