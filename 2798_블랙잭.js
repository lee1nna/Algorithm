let input = require("fs")
  .readFileSync(
    process.platform === "linux" ? "/dev/stdin" : "./2798_블랙잭.txt"
  )
  .toString()
  .trim()
  .split("\n");

let [NM, cards] = input;
let [N, M] = NM.split(" ").map((el) => +el);
let selectedCards = [];
cards = cards.split(" ").map((el) => +el);
let max = 0;

for (let i = 0; i < N - 2; i++) {
  for (let j = i + 1; j < N - 1; j++) {
    for (let k = j + 1; k < N; k++) {
      let sum = cards[i] + cards[j] + cards[k];
      if (sum <= M && sum > max) {
        max = sum;
      }
    }
  }
}

console.log(max);
