let [start, end] = require("fs")
  .readFileSync(
    process.platform === "linux" ? "/dev/stdin" : "./1929_소수구하기.txt"
  )
  .toString()
  .trim()
  .split(" ")
  .map(Number);

const findPrime = (num) => {
  if (Number.isInteger(Math.sqrt(num))) {
    return;
  }

  let squareRoot = Math.floor(Math.sqrt(num));
  let divisorArr = [];

  // 1부터 num의 제곱근까지 num으로 나누어 떨어지는 수 arr 저장
  for (let i = 1; i <= squareRoot; i++) {
    if (num % i === 0) {
      divisorArr.push(i);
    }
  }

  // num과 num으로 나눠떨어지는 수를 나눈 몫을 arr 저장
  divisorArr.forEach((el) => {
    divisorArr.push(num / el);
  });

  if (divisorArr.length === 2) {
    console.log(num);
  }
};

for (let i = start; i <= end; i++) {
  findPrime(i);
}
