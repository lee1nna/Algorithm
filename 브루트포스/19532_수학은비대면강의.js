const input = require("fs")
  .readFileSync(
    process.platform === "linux" ? "/dev/stdin" : "./19532_수학은비대면강의.txt"
  )
  .toString()
  .trim()
  .split(" ")
  .map((el) => +el);

const [a, b, c, d, e, f] = input;

for (let x = -999; x <= 999; x++) {
  let xPos = (a + d) * x;
  for (let y = -999; y <= 999; y++) {
    let yPos = (b + e) * y;

    if (xPos + yPos === c + f && a * x + b * y === c && d * x + e * y === f) {
      console.log(x, y);
    }
  }
}
