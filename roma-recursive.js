var alfa = {
    M : 1000,
    CM : 900,
    D : 500,
    CD : 400,
    C : 100,
    XC : 90,
    L : 50,
    XL : 40,
    X : 10,
    IX : 9,
    V : 5,
    IV : 4,
    I : 1
}

function toRoman(num) {
    if(num== 0){
        return ''
    }else{
        for(i in alfa){
            if(num - alfa[i] >=0){
                return i + toRoman(num-alfa[i])
            }
        }
    }
}

console.log(toRoman(1));
console.log(toRoman(19));
console.log(toRoman(111));
console.log(toRoman(1111));