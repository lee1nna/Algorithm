const input = require("fs")
  .readFileSync(
    process.platform === "linux" ? "/dev/stdin" : "./2231_분해합.txt"
  )
  .toString()
  .trim();

let creator = [];

for (let i = +input; i > 0; i--) {
  let sum = i;

  for (let j = 0; j < input.length; j++) {
    if (String(i)[j]) {
      sum += Number(String(i)[j]);
    }
  }

  if (sum === +input) {
    creator.push(i);
  }
}

console.log(creator.length > 0 ? Math.min(...creator) : 0);
