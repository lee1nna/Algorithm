let input = +require("fs")
  .readFileSync(
    process.platform === "linux" ? "/dev/stdin" : "./1436_영화감독숌.txt"
  )
  .toString()
  .trim();

let cnt = 0;
let N = 1;

while (1) {
  if (String(N).includes("666")) {
    cnt++;
  }

  if (cnt === input) {
    console.log(N);
    break;
  }

  N++;
}
