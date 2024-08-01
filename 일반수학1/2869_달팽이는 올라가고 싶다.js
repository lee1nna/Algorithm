let input = require("fs")
    .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./2869_달팽이는 올라가고 싶다.txt")
    .toString().split(" ").map(el => +el);

const morning = input[0] // 낮
const night = input[1] // 밤
let height = input[2] // 높이
let day = 0

while(true) {
    day += 1
    height = height - morning

    // 오전
    if(height <= 0) {
        break
    }
    // 오후
    else {
        height = height + night;
        if(height <= 0) {
            break
        }
    }
}

console.log(day)


