let input = require("fs")
  .readFileSync(
    process.platform === "linux" ? "/dev/stdin" : "./4134_다음소수.txt"
  )
  .toString()
  .trim()
  .split("\n")
  .map(Number);

input.shift();

const findPrimeNum = (num) => {
  let squareRoot = Math.floor(Math.sqrt(num));
  let divisorArr = [];

  // 1부터 num의 제곱근까지 num으로 나누어 떨어지는 수 arr 저장
  for (let i = 1; i <= squareRoot; i++) {
    if (num !== 0 && num !== 1 && num % i === 0) {
      divisorArr.push(i);
    }
  }

  // num과 num으로 나눠떨어지는 수를 나눈 몫을 arr 저장
  divisorArr.forEach((el) => {
    divisorArr.push(num / el);
  });

  if (divisorArr.length !== 2) {
    findPrimeNum(num + 1);
  } else {
    console.log(num);
  }
};

input.forEach((el) => {
  findPrimeNum(el);
});
