const input = require("fs")
  .readFileSync(
    process.platform === "linux" ? "/dev/stdin" : "./1085_직사각형에서 탈출.txt"
  )
  .toString()
  .trim()
  .split(" ")
  .map((el) => +el);

let [x, y, w, h] = input;
let xDiff = x - w >= 0 ? x - w : -(x - w);
let yDiff = y - h >= 0 ? y - h : -(y - h);
let arr = [x, y, xDiff, yDiff];

arr.sort((a, b) => a - b);

console.log(arr[0]);
