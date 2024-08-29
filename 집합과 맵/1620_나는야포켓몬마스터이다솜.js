let input = require("fs")
  .readFileSync(
    process.platform === "linux"
      ? "/dev/stdin"
      : "./1620_나는야포켓몬마스터이다솜.txt"
  )
  .toString()
  .trim()
  .split("\n");

const [NM, ...poketmons] = input;
const [N, M] = NM.split(" ").map((el) => +el);
const dokam = poketmons.slice(0, N);
const quiz = poketmons.slice(N, N + M);
const dokamMap = new Map();

dokam.forEach((poketmon, idx) => {
  dokamMap.set(idx + 1, poketmon);
  dokamMap.set(poketmon, idx + 1);
});

console.log(
  quiz.map((q) => (isNaN(+q) ? dokamMap.get(q) : dokamMap.get(+q))).join("\n")
);
