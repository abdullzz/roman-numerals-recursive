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

function recursive(num){
    var str = num.toString()
    if(str.length== 1){
        return [str[0]]
    }else{
        var check = ''
        for(let i=0;i<str.length-1;i++){
            check+= '0'
        }
        return [str[0]+check].concat(recursive(str.slice(1)))
    }
}

function toRoman (num) {
    var arr = recursive(num)
    var result = ''
    var count = 0
    for(let j = 0; j < arr.length; j++){
        for(key in alfa){
            while(arr[j]-alfa[key]>=0){
                result+=key
                arr[j] -= alfa[key]
                if(count == 3){
                    count = 0
                    break;
                }
                count++
            }
        }
    }

    return result
}

console.log(toRoman(1));
console.log(toRoman(11));
console.log(toRoman(191));
console.log(toRoman(1111));