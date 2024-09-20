let input = require("fs")
  .readFileSync(
    process.platform === "linux" ? "/dev/stdin" : "./4134_다음소수.txt"
  )
  .toString()
  .trim()
  .split("\n")
  .map(Number);

input.shift();

const findSosu = (num) => {
  let divisorNum = 0;

  for (let i = 1; i <= num; i++) {
    if (num % i === 0) {
      divisorNum++;
    }
  }

  if (divisorNum === 2) {
    console.log(num);
    return;
  } else {
    findSosu(num + 1);
  }
};

input.forEach((el) => {
  findSosu(el);
});
