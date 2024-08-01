let input = require("fs")
    .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./1193_분수찾기.txt")
    .toString();
// const input = require("fs").readFileSync("/dev/stdin").toString();

let group = 1
let myGroup = 0
let result = ''

while (1) {
    input = +input - group
    group++

    if (input <= 0) {
        myGroup = group - 1
        input = input < 0 ? -input : input

        let j = 1

        // 그룹이 짝수
        if (myGroup % 2 === 0) {
            // 자릿값이 0
            if (input === 0) {
                result = myGroup + '/' + 1
            } else {
                for (let i = 0; i <= input; i++) {
                    result = (myGroup - i) + '/' + j
                    j++
                }
            }
        }
        // 그룹이 홀수
        else {
            // 자릿값이 0
            if (input === 0) {
                result = 1 + '/' + myGroup
            } else {
                for (let i = 0; i <= input; i++) {
                    result = j + '/' + (myGroup - i)
                    j++
                }
            }
        }

        break;
    }
}

console.log(result)