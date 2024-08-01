const input = +require("fs")
  .readFileSync(
    process.platform === "linux" ? "/dev/stdin" : "./11653_소인수분해.txt"
  )
  .toString()
  .trim();

const N = input;
let factorization = [];
let remain = N;

for (let i = 2; i <= N; i++) {
  while (remain % i === 0) {
    factorization.push(i);
    remain /= i;
  }
}

console.log(factorization.join("\n"));
