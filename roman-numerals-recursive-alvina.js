let ref = {
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
  I: 1,
};

function toRoman(n) {
  let result = '';
  if (n === 0) {
    return result;
  } else {
    for (let key in ref) {
      if (n >= ref[key]) {
        return key + toRoman(n-ref[key]);
      }
    }
  }
}

console.log(toRoman(3999));

