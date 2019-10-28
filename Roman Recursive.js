let romawi = [
    [1000,'M'],
    [900,'CM'],
    [500,'D'],
    [400,'CD'],
    [100,'C'],
    [90,'XC'],
    [50,'L'],
    [40,'XL'],
    [10,'X'],
    [9,'IX'],
    [5,'V'],
    [4,'IV'],
    [1,'I']
]

function toRomanRecursive(num){
    if(num<1 || num>3000) return ''

    for(let roman of romawi){
        if(num>=roman[0]) 
        return roman[1]+toRomanRecursive(num-roman[0]) 
    }

    // if(num>=1000){
    //     return 'M'+toRomanRecursive(num-1000)
    // }
    // if(num>=100){
    //     let count = 0
    //     while(num>=100){
    //         num-=100
    //         count++
    //     }
    //     if(count===9) return 'CM'+toRomanRecursive(num)
    //     if(count===4) return 'CD'+toRomanRecursive(num)
    //     if(count-5>=0){
    //         let temp = ''
    //         temp+='D'
    //         count-=5
    //         while(count!==0){
    //             temp+='C'
    //             count--
    //         }
    //         return temp+toRomanRecursive(num)
    //     }
    //     if(count<5){
    //         temp = ''
    //         while(count!==0){
    //             temp+='C'
    //             count--
    //         }
    //         return temp+toRomanRecursive(num)
    //     }
    // }
    // if(num>=10){
    //     let count = 0
    //     while(num>=10){
    //         num-=10
    //         count++
    //     }
    //     if(count===9) return 'XC'+toRomanRecursive(num)
    //     if(count===4) return 'XL'+toRomanRecursive(num)
    //     if(count-5>=0){
    //         let temp = ''
    //         temp+='L'
    //         count-=5
    //         while(count!==0){
    //             temp+='X'
    //             count--
    //         }
    //         return temp+toRomanRecursive(num)
    //     }
    //     if(count<5){
    //         temp = ''
    //         while(count!==0){
    //             temp+='X'
    //             count--
    //         }
    //         return temp+toRomanRecursive(num)
    //     }
    // }
    // if(num>0){
    //     let count = 0
    //     while(num>0){
    //         num-=1
    //         count++
    //     }
    //     if(count===9) return 'IX'+toRomanRecursive(num)
    //     if(count===4) return 'IV'+toRomanRecursive(num)
    //     if(count-5>=0){
    //         let temp = ''
    //         temp+='V'
    //         count-=5
    //         while(count!==0){
    //             temp+='I'
    //             count--
    //         }
    //         return temp+toRomanRecursive(num)
    //     }
    //     if(count<5){
    //         temp = ''
    //         while(count!==0){
    //             temp+='I'
    //             count--
    //         }
    //         return temp+toRomanRecursive(num)
    //     }
    // }
}

console.log(toRomanRecursive(4))
console.log(toRomanRecursive(9))
console.log(toRomanRecursive(23))
console.log(toRomanRecursive(1453))
console.log(toRomanRecursive(1646))