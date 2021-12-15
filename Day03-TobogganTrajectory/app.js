const fs = require('fs');

const array = fs
    .readFileSync("input.txt", {
        encoding: "utf-8"
    })
    .replace(/[\r]/g, "")
    .split("\n")
    .filter((x) => Boolean(x));


function part1() {
    let width = array[0].length;
    let hight = array.length;
    let x = 0;
    let y = 0;
    let trees = 0;
    while (y < hight) {
        if (array[y][x] === "#") {
            trees = trees + 1;
        }
        y = y + 1;
        x = (x + 3) % width;
    }
    return trees;
}

(() => {
    const begin = new Date();
    const output = part1();
    console.log("PART-1:", "How many trees will be encountered on 3-1 slope:", output);
    const end = new Date() - begin;
    console.info('Execution time: %dms', end);
})();

function part2() {
    let width = array[0].length;
    let hight = array.length;
    let directio = [
        [1, 1],
        [3, 1],
        [5, 1],
        [7, 1],
        [1, 2]
    ];
    let all = 1;

    directio.forEach(([dx, dy]) => {
        let x = 0;
        let y = 0;
        let trees = 0;
        while (y < hight) {
            if (array[y][x] === "#") {
                trees = trees + 1;
            }
            y = y + dy;
            x = (x + dx) % width;
        }
        all = all * trees;
    })
    return all;
}

(() => {
    const begin = new Date();
    const output = part2();
    console.log("PART-2:", "Multiplication of 1-1, 3-1, 5-1, 7-1, 1-2 slopes:", output);
    const end = new Date() - begin;
    console.info('Execution time: %dms', end);
})()