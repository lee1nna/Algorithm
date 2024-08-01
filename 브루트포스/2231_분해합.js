const input = require("fs")
  .readFileSync(
    process.platform === "linux" ? "/dev/stdin" : "./2231_분해합.txt"
  )
  .toString()
  .trim();

let creator = [];

for (let i = 1; i <= +input; i++) {
  let sum = i;

  for (let j = 0; j < input.length; j++) {
    if (String(i)[j]) {
      sum += Number(String(i)[j]);
    }
  }

  if (sum === +input) {
    creator.push(i);
    break;
  }
}

console.log(creator.length > 0 ? creator[0] : 0);
