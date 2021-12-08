const fs = require('fs')

const array = fs
    .readFileSync('input.txt', {
        encoding: 'utf-8'
    })
    .split("\n")
    .filter((x) => Boolean(x))
    .map((x) => parseInt(x));

function part1() {
    let report = array;
    let output = 0;
    for (let i = 0; i < array.length; i++) {
        let first = report[i];
        for (let j = 0; j < array.length; j++) {
            let second = report[j];
            if (first + second === 2020) {
                output = first * second;
                console.log("PART-1:", "This,", first, "and this,", second, "is this:", output)
            }
        }
        if (output != 0) {
            break;
        }
    }
}

part1();

function part2() {
    let report = array;
    let output = 0;
    for (let i = 0; i < array.length; i++) {
        let first = report[i];
        for (let j = 0; j < array.length; j++) {
            let second = report[j];
            for (let k = 0; k < array.length; k++) {
                let third = report[k];
                if (first + second + third === 2020) {
                    output = first * second * third;
                    console.log("PART-2:", "This,", first, "this,", second, "and this", third, "is this:", output);
                }
            }
            if (output != 0) {
                break;
            }
        }
        if (output != 0) {
            break;
        }
    }
}

part2();