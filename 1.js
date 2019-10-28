function toRoman(num) {
    let abjad = ['M', 'D', 'C' ,'L' ,'XL', 'X', 'IX', 'V', 'IV', 'I']
    let angka = [1000, 500 ,100, 50, 40, 10, 9, 5, 4, 1];
    if(num <= 0) {
        return ''; 
    } else {
        for(let i = 0 ; i < angka.length; i++) {
            if(angka[i] <= num) {
                return abjad[i] + toRoman(num - angka[i]);  
            }
        }
    }
    
} 

console.log(toRoman(4));
console.log(toRoman(9));
console.log(toRoman(23));