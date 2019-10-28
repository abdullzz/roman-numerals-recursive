function toRoman(num){
    var references = [ [1000,'M'],[900,'CM'],[500,'D'],[400,'CD'], [100,'C'],[90,'XC'],[50,'L'],[40,'XL'], [10,'X'],[9,'IX'],[5,'V'],[4,'IV'], [1,'I'] ]
    var result = ''
    
    for(var reference of references){
        if(num >= reference[0]){
            return result += reference[1] + toRoman(num-reference[0])
        }
    }
    return ''
}

console.log('My totally sweet testing script\n');
console.log('input  |  expected  |  actual');
console.log('-------|------------|--------');
console.log('4      |  IV        |', toRoman(4));
console.log('9      |  IX        |', toRoman(9));
console.log('23     |  XXIII     |', toRoman(23));
console.log('1453   |  MCDLIII   |', toRoman(1453));
console.log('1646   |  MDCXLVI   |', toRoman(1646));