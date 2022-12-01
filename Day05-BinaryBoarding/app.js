require('../support/time')
const fs = require("fs");

const array = fs
    .readFileSync('input.txt', {
        encoding: 'utf-8'
    })
    .replace(/\r/g, "")
    .split("\n")

function part1() {
    let i = 0;
    let row = 0;
    let column = 0;
    let seatID = 0;
    let seatIDs = [];
    for (i in array) {
        let check = array[i].split("");
        if (check[0] === "B") row = row + 64;
        if (check[1] === "B") row = row + 32;
        if (check[2] === "B") row = row + 16;
        if (check[3] === "B") row = row + 8;
        if (check[4] === "B") row = row + 4;
        if (check[5] === "B") row = row + 2;
        if (check[6] === "B") row = row + 1;
        if (check[7] === "R") column = column + 4;
        if (check[8] === "R") column = column + 2;
        if (check[9] === "R") column = column + 1;
        seatID = row * 8 + column;
        seatIDs.push(seatID)
        row = 0;
        column = 0;
    }
    return Math.max(...seatIDs)
}

timeScript(part1(), 1)