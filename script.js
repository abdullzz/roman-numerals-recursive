function toRoman (number) {
  // if (number <= 0 || number > 3000) {
  //   return 'Can only input number from 1 to 3000'
  // }

  if (number === 0) {
    return ''
  }

  let romans = {
    '1': 'I',
    '4': 'IV',
    '5': 'V',
    '9': 'IX',
    '10': 'X',
    '40': 'XL',
    '50': 'L',
    '90': 'XC',
    '100': 'C',
    '400': 'CD',
    '500': 'D',
    '900': 'CM',
    '1000': 'M',
  }
  let devider = [1000, 100, 10, 1]
  let temp = {}

  for (let num of devider) {
    if (number / num >= 1) {
      temp.multiplier = Math.floor(number / num)
      temp.number = temp.multiplier * num
      temp.devidedBy = num
      break
    }
  }

  if (temp.multiplier === 4 || temp.multiplier === 9) {
    return romans[temp.devidedBy * temp.multiplier] + toRoman(number - temp.number)
  } else if (temp.multiplier < 4) {
    return romans[temp.devidedBy].repeat(temp.multiplier) + toRoman(number - temp.number)
  } else if (temp.multiplier > 5) {
    return romans[temp.devidedBy * 5] + romans[temp.devidedBy].repeat(temp.multiplier - 5) + toRoman(number - temp.number)
  } else {
    return romans[temp.number] + toRoman(number - temp.number)
  }
}

console.log('My totally sweet testing script\n')
console.log('input  |  expected  | actual')
console.log('_____________________________')
console.log('4      | IV         |', toRoman(4))
console.log('9      | IX         |', toRoman(9))
console.log('23     | XXIII      |', toRoman(23))
console.log('1453   | MCDLIII    |', toRoman(1453))
console.log('1646   | MDCXLVI    |', toRoman(1646))
