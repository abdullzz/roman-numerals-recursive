function toRomanRecursive (num) {
   
    var roman = {
       'M' :  1000,
       'CM': 900 ,
       'D' : 500,
       'CD': 400,
       'C' : 100,
       'XC': 90,
       'L' : 50,
       'XL': 40,
       'X' : 10,
       'IX': 9,
       'V' : 5,
       'IV': 4,
       'I' : 1
    }
    if(num === 0){
        return ''
    } else {
        for (let key in roman){
            if(num >= roman[key]){
                    return key + toRomanRecursive(num -= roman[key])   
            }
        }
    }
    
    
    
}

console.log('My totally sweet testing script\n')
console.log('input  |   ecpected  |  actual')
console.log('_______|_____________|__________')
console.log('4      |  IV         |', toRomanRecursive(4))
console.log('9      |  IX         |', toRomanRecursive(9))
console.log('23     |  XXIII      |', toRomanRecursive(23))
console.log('1453   |  MCDLIII    |', toRomanRecursive(1453))
console.log('1646   |  MDCXLVI    |', toRomanRecursive(1646))