const input = require("fs")
  .readFileSync(
    process.platform === "linux" ? "/dev/stdin" : "./5086_배수와 약수.txt"
  )
  .toString()
  .trim()
  .split("\n")
  .map((el) => el.split(" ").map((el) => +el));

input.forEach((el) => {
  if (el[0] === 0 && el[1] === 0) {
    return;
  }

  // 약수
  if (el[1] % el[0] === 0) {
    console.log("factor");
  }
  // 배수
  else if (el[0] % el[1] === 0) {
    console.log("multiple");
  } else {
    console.log("neither");
  }
});
