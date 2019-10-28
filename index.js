function toRoman(num){
    let roman = ['M','CD','D','CD','C','XC','L','XL','X','IX','V','IV','I']
    let number = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1]

    let result = ""
    let calculate = num
    while (calculate > 0) {
        if(number.length == 0){
            return ''
        } else {
            for (let i = 0; i < number.length; i++){
                if(calculate % number[i] !== calculate){
                    result = roman[i]
                    return result + toRoman(num - number[i])
                }
            }
        }

    }
    return result
}

console.log('My totally sweet testing script\n')
console.log('input | expected | actual')
console.log('------|----------|-------')
console.log(` 4    | IV       | `, toRoman(4))
console.log(` 9    | IX       | `, toRoman(9))
console.log(` 23   | XXIII    | `, toRoman(23))
console.log(` 1453 | MCDLIII  | `, toRoman(1453))
console.log(` 1646 | MDCXLVI  | `, toRoman(1646))