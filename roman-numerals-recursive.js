
var obj = {
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

function toRoma(num){
    if (num == 0 || num == undefined){
        return ''
    }
    else{
        for ( i in obj){
            while (num >= obj[i]){
                return i + toRoma(num-obj[i])
            }
        }
    }
}


console.log(toRoma(3))
console.log(toRoma(23))
console.log(toRoma(1453))
console.log(toRoma(1646))