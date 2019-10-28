function romanRecursive(number) {
    if (number == 0) {
        return ""
    }
    let romans = [
        [1000, "M"],
        [900, "CM"],
        [500, "D"],
        [400, "CD"],
        [100, "C"],
        [90, "XC"],
        [50, "L"],
        [40, "XL"],
        [10, "X"],
        [9, "IX"],
        [5, "V"],
        [4, "IV"],
        [1, "I"]
    ];
    for (let i = 0; i < romans.length; i++) {
        if (number >= romans[i][0]) {
            number -= romans[i][0]
            return romans[i][1] + romanRecursive(number)
        }
    }
}
console.log(romanRecursive(4))
console.log(romanRecursive(9))
console.log(romanRecursive(1453))
console.log(romanRecursive(1646))