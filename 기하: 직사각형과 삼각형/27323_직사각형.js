const input = require("fs")
  .readFileSync(
    process.platform === "linux" ? "/dev/stdin" : "./27323_직사각형.txt"
  )
  .toString()
  .trim()
  .split("\n")
  .map((el) => +el);

const [A, B] = input;

console.log(A * B);
