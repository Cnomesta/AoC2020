require('../util/time')
require('../util/fsPull')

const array = singleDepth('input.txt').map((x) => x.split(" "));

function part1(input) {
    let set = input;
    let accumulator = 0;
    let vault = [];
    let mod = false;
    let i = 0;
    for (i = 0; i <= set.length || i >= 0;) {
        if (vault.includes(i) || i < 0 || i >= set.length) { break; }
        console.log(i, set[i][0], set[i][1])
        switch (set[i][0]) {
            case 'acc':
                vault.push(i)
                if (set[i][1].charCodeAt(0) === 43 && mod === false) { accumulator = accumulator + parseInt(set[i][1].slice(1)); mod = true };
                if (set[i][1].charCodeAt(0) === 45 && mod === false) { accumulator = accumulator - parseInt(set[i][1].slice(1)); mod = true };
                i++;
                break;
            case 'jmp':
                vault.push(i)
                if (mod === false && set[i][1].charCodeAt(0) === 43) { i = i + parseInt(set[i][1].slice(1)); mod = true }
                if (mod === false && set[i][1].charCodeAt(0) === 45) { i = i - parseInt(set[i][1].slice(1)); mod = true }
                break;
            default:
                vault.push(i)
                i++;
                break;
        }
        mod = false;
    }
    return [accumulator, i]
}

function part2() {
    let value;
    let gateJmp = false
    let gateNop = false
    let vault = array
    let kill = 0;
    let i = 0
    do {
        if (!vault === array) { vault = array }
        value = []
        if (vault[i][0] === "nop" && gateNop === false) { vault[i][0] = "jmp"; gateJmp = true }
        if (vault[i][0] === "jmp" && gateJmp === false) { vault[i][0] = "nop"; gateNop = true }
        kill = part1(vault)[1]
        value = part1(vault)[0];
        if (gateNop === true) { vault[i][0] = "jmp"; gateNop = false; }
        if (gateJmp === true) { vault[i][0] = "nop"; gateJmp = false; }
        if (kill >= array.length) { i = array.length }
        i++;
    } while (i < array.length);
    return value
}

timeScript(part1(array)[0], 1)
timeScript(part2(), 2)