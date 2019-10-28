//jika tanpa looping

// function cariRoman(numb, number = [1000, 500, 400, 100, 50, 40, 10, 9, 5, 4, 1], roman = ["M", "D", "CD", "C", "L", "X", "XL", "IX", "V", "IV", "I"]) {
//     if (number[0] <= numb) {
//         return roman[0]
//     } else {
//         hapusNum = number.slice(1)
//         hapusRoman = roman.slice(1)
//         return cariRoman(numb, hapusNum, hapusRoman)
//     }
// }

// function cariNumber(input, number = [1000, 500, 400, 100, 50, 40, 10, 9, 5, 4, 1], roman = ["M", "D", "CD", "C", "L", "X", "XL", "IX", "V", "IV", "I"]) {
//     if (number[0] <= input) {
//         return number[0]
//     } else {
//         hapusNum = number.slice(1)
//         hapusRoman = roman.slice(1)
//         return cariNumber(input, hapusNum, hapusRoman)
//     }
// }

function toRomanRecursive(num) {
    var number = [1000, 500, 400, 100, 50, 40, 10, 9, 5, 4, 1]
    var roman = ["M", "D", "CD", "C", "L", "XL", "X", "IX", "V", "IV", "I"]
    var str = ""
    if (num <= 0) {
        return str
    } else {
        for (let i = 0; i < number.length; i++) {
            if (number[i] <= num) {
                str += roman[i]
                num -= number[i]
                return str + toRomanRecursive(num)
            }
        }
    }
}

console.log("My totally sweet testing script\n")
console.log("input | expected | actual")
console.log("4     | IV       |", toRomanRecursive(4))
console.log("9     | IX       |", toRomanRecursive(9))
console.log("23    | XXIII    |", toRomanRecursive(23))
console.log("1453  | MCDLIII  |", toRomanRecursive(1453))
console.log("1646  | MDCXLVI  |", toRomanRecursive(1646))