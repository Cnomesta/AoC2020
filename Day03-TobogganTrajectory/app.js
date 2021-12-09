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
    console.log("PART-1:", "Trees:", trees);
}

part1();

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
        console.log("Trees:", trees);
    })
    console.log("PART-2:", "Trees on all slopes:", all);
}

part2();




// function part1() {
//     let width = array[0].length
//     let x = "#";
//     let pos = -3;
//     let item = "";
//     let tree = 0;
//     let open = 0;
//     let all = 0;
//     for (let i = 0; i < array.length; i++) {
//         pos += 3;
//         if (pos > width) {
//             let rest = width + 1;
//             pos -= rest;
//         }
//         console.log(array[i], pos);
//         item = array[i].slice(pos, pos + 1);
//         if (item.length == 0) {
//             item = array[i].slice(pos - 1, pos)
//         }
//         if (item === x) {
//             tree++;
//         } else {
//             open++;
//         }
//         all = open + tree;
//         console.log(item, i, pos, tree, open, all);
//     }
// }