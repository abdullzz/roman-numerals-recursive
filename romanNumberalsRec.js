function roman(number){
    // let output = ''
    const arabic = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1]
    var romans = ["M", "CM","D","CD","C", "XC", "L", "XL", "X","IX","V","IV","I"]
    if(number === 0) {
        return ' '
    }
    else {
        for(let i = 0; i < arabic.length; i++) {
            if(number%arabic[i] < number) {
                return romans[i] + roman(number - arabic[i])
            }
        }
    }
};

 console.log(roman(54))