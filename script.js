function toRoman(num) {
    if (num <= 0 || num === undefined) {
        return ''
    } else {
        let obj = {
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
        for (i in obj) {
            if (num >= obj[i]) {
                return i + toRoman(num - obj[i])
            }
        }
    }

}

console.log('My totally sweet testing script\n')
console.log('input | expected | actual')
console.log('______|__________|_______')
console.log('4     |  IV      |', toRoman(4))
console.log('9     |  IX      |', toRoman(9))
console.log('23    |  XXIII   |', toRoman(23))
console.log('1453  |  MCDLIII |', toRoman(1453))
console.log('1646  |  MDCXLVI |', toRoman(1646))