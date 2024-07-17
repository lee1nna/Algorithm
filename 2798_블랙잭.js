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

for (let i = 0; i < N; i++) {
  let pick = [];
  for (let j = i + 1; j < N; j++) {
    for (let k = j + 1; k < N; k++) {
      pick.push(cards[i]);
      pick.push(cards[j]);
      pick.push(cards[k]);

      selectedCards.push(pick);
      pick = [];
    }
  }
}

let diff = selectedCards[0].reduce((prev, cur) => prev + cur, 0); // M과 3개 합의 차이
let idx = 0; // 최소 차이를 가지는 배열 인덱스

selectedCards.forEach((card, i) => {
  let [a, b, c] = card;
  let temp = M - (a + b + c);

  if (temp >= 0 && temp < diff) {
    diff = temp;
    idx = i;
  }
});

console.log(selectedCards[idx].reduce((prev, cur) => prev + cur, 0));
