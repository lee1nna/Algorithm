const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./9063_대지.txt")
  .toString()
  .trim()
  .split("\n");

const N = input.shift();
const coord = input.map((el) => el.split(" ")).map((el) => el.map((el) => +el));

if (N > 1) {
  let x = [];
  let y = [];

  for (let i = 0; i < N; i++) {
    x.push(coord[i][0]);
  }
  for (let i = 0; i < N; i++) {
    y.push(coord[i][1]);
  }

  console.log(
    (Math.max(...x) - Math.min(...x)) * (Math.max(...y) - Math.min(...y))
  );
} else {
  console.log(0);
}
