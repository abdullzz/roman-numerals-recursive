function toRoman (angka) {
    let result = '';
    
    if (angka === 0) {
        return ''
    }

    let roman = {
        1 : 'I',
        4 : 'IV',
        5 : 'V',
        9 : 'IX',
        10 : 'X',
        40 : 'XL',
        50 : 'L',
        100 : 'C',
        400 : 'CD',
        500 : 'D',
        900 : 'DCCC',
        1000 : 'M'
    }
    
    romanArray = Object.keys(roman);
    
    for (let i = romanArray.length; i >= 0; i--) {
        if (angka >= romanArray[i]) {
            result += roman[romanArray[i]];
            angka -= romanArray[i];
        }
    }
    return result + toRoman(angka)
}

console.log('4' , toRoman(4));
console.log('9' , toRoman(9));
console.log('23' , toRoman(23));
console.log('1453' , toRoman(1453));
console.log('1646' , toRoman(1646));