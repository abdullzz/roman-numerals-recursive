function toRoman (num){

    var res=''
    
    var roman = {
        'M' : 1000,
        'CM' : 900, 
        'D' : 500,
        'CD' : 400,
        'C' : 100,
        'XC' : 90,
        'L' : 50,
        'XL' : 40,
        'X' : 10,
        'IX' : 9,
        'V':5,
        'IV': 4,
        'I': 1
    }

    if(num==0)return''
    else {
        var keys = Object.keys(roman) // [M,CM,D,CD,C,XC,.....]
        
        for(let i = 0; i<keys.length;i++){
            // var found = false 
            if(num >= roman[keys[i]]){
               return keys[i] + toRoman(num-=roman[keys[i]]); 
            }
        }
    }
   
}

console.log(toRoman(3450));