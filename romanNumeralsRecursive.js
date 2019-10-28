function toRoman(num) {
  let hasil = ""
  let roman = ["M","CM","D","CD","C","XC","L","XL","X","IX","V","IV","I"]
  let number = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1]
  
  if (num === 0) {
    return ""
  } else {
    let index = 0
    while(num > 0) {
      if (num >= number[index]) {
        hasil += roman[index]
        num -= number[index]
        return hasil + toRoman(num)
      } else if (num < number[index]) {
        index++
      }
    }
  }
}

console.log('My totally sweet testing script\n')
console.log('input | expected | actual')
console.log('------|----------|--------')
console.log('4     | IV       |',toRoman(4))
console.log('9     | IX       |',toRoman(9))
console.log('23    | XXIII    |',toRoman(23))
console.log('1453  | MCDLIII  |',toRoman(1453))
console.log('1646  | MDCXLVI  |',toRoman(1646))
