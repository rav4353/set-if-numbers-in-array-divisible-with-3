var number = [7, 4, 12, 14, 15, 17, 22, 36];
var out = [];

for (let i = 0; i < number.length; i++) {
    if (number[i] % 3 === 0) {
        out.push(number[i]);
    }
}

console.log(out);