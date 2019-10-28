function toRomanRecursive(num){
  var roman = ['I', 'IV', 'V', 'IX', 'X', 'XL', 'L', 'XC', 'C', 'CD', 'D', 'CM', 'M']
  var arabic = [1, 4, 5, 9, 10, 40, 50, 90, 100, 400, 500, 900, 1000]
  if (num == 0){
    return ''
  } else {
    for (var i = arabic.length-1; i >= 0; i -= 1){
      if (num >= arabic[i]){
        return roman[i] + toRomanRecursive(num - arabic[i])
      }
    }
  }
}

console.log(toRomanRecursive(4))
console.log(toRomanRecursive(9))
console.log(toRomanRecursive(23))
console.log(toRomanRecursive(1453))
console.log(toRomanRecursive(1646))

