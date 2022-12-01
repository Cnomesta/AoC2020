require('../support/time')
const fs = require("fs");

const array = fs
    .readFileSync('input.txt', {
        encoding: 'utf-8'
    })
    .replace(/\r/g, "")
    .split("\n\n")
    .map((x) =>
        x
            .trim()
            .split(/[\n :]+/)
    );

function part1() {
    let validPP = 0;
    let i = 0;
    for (i in array) {
        if (array[i].length === 16) {
            validPP++
            i++
        } else if (array[i].length === 14 && !array[i].includes("cid")) {
            validPP++
            i++
        } else {
            i++
        }
    }
    return validPP
}

let ecp = ["amb", "blu", "brn", "gry", "grn", "hzl", "oth"]
function part2() {
    let validPP = 0;
    let i = 0;
    let checkSum = 0;
    for (i in array) {
        if (array[i].length === 16) {
            if (1920 <= parseInt(array[i][array[i].indexOf("byr") + 1]) && parseInt(array[i][array[i].indexOf("byr") + 1]) <= 2002) checkSum++;
            if (2010 <= parseInt(array[i][array[i].indexOf("iyr") + 1]) && parseInt(array[i][array[i].indexOf("iyr") + 1]) <= 2020) checkSum++;
            if (2020 <= parseInt(array[i][array[i].indexOf("eyr") + 1]) && parseInt(array[i][array[i].indexOf("eyr") + 1]) <= 2030) checkSum++;
            if (ecp.includes(array[i][array[i].indexOf("ecl") + 1])) checkSum++;
            if (array[i][array[i].indexOf("pid") + 1].length === 9) checkSum++;
            if (array[i][array[i].indexOf("hcl") + 1].length === 7 && array[i][array[i].indexOf("hcl") + 1].includes("#")) checkSum++;
            if (array[i][array[i].indexOf("hgt") + 1].includes("cm")) {
                let ch = parseInt(array[i][array[i].indexOf("hgt") + 1].replace("cm", ""))
                if (150 <= ch && ch <= 193) checkSum++;
            } else if (array[i][array[i].indexOf("hgt") + 1].includes("in")) {
                let ch = parseInt(array[i][array[i].indexOf("hgt") + 1].replace("cm", ""))
                if (59 <= ch && ch <= 76) checkSum++;
            }
            if (checkSum === 7) {
                console.log(i, "8",
                    array[i][array[i].indexOf("byr") + 1],
                    array[i][array[i].indexOf("iyr") + 1],
                    array[i][array[i].indexOf("eyr") + 1],
                    array[i][array[i].indexOf("ecl") + 1],
                    array[i][array[i].indexOf("pid") + 1],
                    array[i][array[i].indexOf("hcl") + 1],
                    array[i][array[i].indexOf("hgt") + 1]
                ); validPP++;
            }
            //console.log("8", i, validPP, checkSum);
            checkSum = 0;
            i++
        } else if (array[i].length === 14 && !array[i].includes("cid")) {
            if (1920 <= parseInt(array[i][array[i].indexOf("byr") + 1]) && parseInt(array[i][array[i].indexOf("byr") + 1]) <= 2002) checkSum++;
            if (2010 <= parseInt(array[i][array[i].indexOf("iyr") + 1]) && parseInt(array[i][array[i].indexOf("iyr") + 1]) <= 2020) checkSum++;
            if (2020 <= parseInt(array[i][array[i].indexOf("eyr") + 1]) && parseInt(array[i][array[i].indexOf("eyr") + 1]) <= 2030) checkSum++;
            if (ecp.includes(array[i][array[i].indexOf("ecl") + 1])) checkSum++;
            if (array[i][array[i].indexOf("pid") + 1].length === 9) checkSum++;
            if (array[i][array[i].indexOf("hcl") + 1].length === 7 && array[i][array[i].indexOf("hcl") + 1].includes("#")) checkSum++;
            if (array[i][array[i].indexOf("hgt") + 1].includes("cm")) {
                let ch = parseInt(array[i][array[i].indexOf("hgt") + 1].replace("cm", ""))
                if (150 <= ch && ch <= 193) checkSum++;
            } else if (array[i][array[i].indexOf("hgt") + 1].includes("in")) {
                let ch = parseInt(array[i][array[i].indexOf("hgt") + 1].replace("cm", ""))
                if (59 <= ch && ch <= 76) checkSum++;
            }
            if (checkSum === 7) {
                console.log(i, "7",
                    array[i][array[i].indexOf("byr") + 1],
                    array[i][array[i].indexOf("iyr") + 1],
                    array[i][array[i].indexOf("eyr") + 1],
                    array[i][array[i].indexOf("ecl") + 1],
                    array[i][array[i].indexOf("pid") + 1],
                    array[i][array[i].indexOf("hcl") + 1],
                    array[i][array[i].indexOf("hgt") + 1]
                ); validPP++;
            }
            //console.log("7", i, validPP, checkSum);
            checkSum = 0;
            i++
        } else {
            console.log(i)
            i++
        }
    }
    return validPP
}

//timeScript(part1(), 1)
timeScript(part2(), 2)