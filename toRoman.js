var dict = [
  [1000, 'M'],
  [500, 'D'],
  [400, 'CD'],
  [100, 'C'],
  [50, 'L'],
  [40, 'XL'],
  [10, 'X'],
  [9, 'IX'],
  [5, 'V'],
  [4, 'IV'],
  [1, 'I']
];

function toRoman(num) {
  if(num == 0) return '';

  for(var i = 0; i < dict.length; i++) {
    if(num%dict[i][0] != num) return dict[i][1] + toRoman(num-dict[i][0]);
  }
}

console.log('My totally sweet testing script\n');
console.log('input | expected  | actual');
console.log('------|-----------|----')
console.log('4     | IV        | ', toRoman(4));
console.log('9     | IX        | ', toRoman(9));
console.log('23    | XXIII     | ', toRoman(23));
console.log('1453  | MCDLIII   | ', toRoman(1453));
console.log('1646  | MDCXLVI   | ', toRoman(1646));