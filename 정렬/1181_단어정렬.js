let input = require("fs")
  .readFileSync(
    process.platform === "linux" ? "/dev/stdin" : "./1181_단어정렬.txt"
  )
  .toString()
  .trim()
  .split("\n");

const N = +input.shift();
const sortedArr = Array.from(new Set(input)).sort((a, b) => {
  if (a.length > b.length) {
    return 1;
  } else if (a.length === b.length) {
    if (a > b) {
      return 1;
    } else {
      return -1;
    }
  } else {
    return -1;
  }
});

console.log(sortedArr.join("\n"));
