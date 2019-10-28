function toRoman(num) {
  // var roman = { I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000 };
  var romanVal = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
  var romanNum = [
    "M",
    "CM",
    "D",
    "CD",
    "C",
    "XC",
    "L",
    "LX",
    "X",
    "IX",
    "V",
    "IV",
    "I"
  ];
  if (num < 1) {
    return "";
  }
  var result = "";
  for (let i = 0; i < romanVal.length; i++) {
    if (num >= romanVal[i]) {
      result += romanNum[i];
      num -= romanVal[i];
      return result + toRoman(num);
    }
  }
}

//test case
console.log(toRoman(1)); // I
console.log(toRoman(2)); // II
console.log(toRoman(3)); // III
console.log(toRoman(4)); // IV
console.log(toRoman(5)); // V
console.log(toRoman(6)); // VI
console.log(toRoman(9)); // IX
console.log(toRoman(23)); // XXIII
console.log(toRoman(1453)); // MCDLIII
console.log(toRoman(1646)); // MDCXLVI
console.log(toRoman(476)); // CDLXXVI
