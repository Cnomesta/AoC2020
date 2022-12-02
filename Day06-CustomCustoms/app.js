require('../support/time')
const fs = require("fs");

const array = fs
    .readFileSync('input.txt', {
        encoding: 'utf-8'
    })
    .replace(/\r/g, "")
    .split("\n\n")
    .map((x) => x.replace(/\n/g, ""))
    .reduce((sum, string) => sum + new Set(string).size, 0);


timeScript(array, 1)
console.log(array)