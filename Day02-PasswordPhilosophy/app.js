const fs = require('fs');

const array = fs
    .readFileSync("input.txt", {
        encoding: "utf-8"
    })
    .replace(/[\r]/g, "")
    .split("\n")
    .filter((x) => Boolean(x));

function part1() {
    let output = 0;
    for (let i = 0; i < array.length; i++) {
        let lines = array[i].split(" ");
        let amm = lines[0].split("-");
        let tag = lines[1].replace(/:/, "");
        let set = lines[2];
        let count = set.split(tag).length - 1;
        if (count >= amm[0] && count <= amm[1]) {
            output++;
        }
    }
    return [output];
}

(() => {
    const begin = new Date();
    const output = part1();
    console.log("PART-1:", "Ammount of valid passwords:", output);
    const end = new Date() - begin;
    console.info('Execution time: %dms', end);
})();

function part2() {
    let output = 0;
    for (let i = 0; i < array.length; i++) {
        let lines = array[i].split(" ");
        let amm = lines[0].split("-");
        let tag = lines[1].replace(/:/, "");
        let set = lines[2];
        if (set.slice(amm[0] - 1, amm[0]) !== tag && set.slice(amm[1] - 1, amm[1]) == tag) {
            output++;
        }
        if (set.slice(amm[0] - 1, amm[0]) == tag && set.slice(amm[1] - 1, amm[1]) !== tag) {
            output++;
        }
    }
    return [output];
}

(() => {
    const begin = new Date();
    const output = part2();
    console.log("PART-2:", "Ammount of valid passwords:", output);
    const end = new Date() - begin;
    console.info('Execution time: %dms', end);
})();