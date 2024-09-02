let input = require("fs")
  .readFileSync(
    process.platform === "linux" ? "/dev/stdin" : "./10816_숫자카드.txt"
  )
  .toString()
  .trim()
  .split("\n");

const [N, NList, M, MList] = input;
const NArr = NList.split(" ").map((el) => +el);
const MArr = MList.split(" ").map((el) => +el);
const NMap = new Map();

NArr.forEach((n) => {
  if (NMap.get(n)) {
    NMap.set(n, NMap.get(n) + 1);
  } else {
    NMap.set(n, 1);
  }
});

console.log(
  MArr.map((m) => (NMap.get(m) !== undefined ? NMap.get(m) : 0)).join(" ")
);
