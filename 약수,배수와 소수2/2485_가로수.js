let input = require("fs")
  .readFileSync(
    process.platform === "linux" ? "/dev/stdin" : "./2485_가로수.txt"
  )
  .toString()
  .trim()
  .split("\n")
  .map(Number);

input.shift();

const dist = [];

for (let i = input.length - 1; i > 0; i--) {
  if (input[i - 1]) {
    dist.push(input[i] - input[i - 1]);
  }
}

const gcd = (a, b) => {
  let max = a > b ? a : b;
  let min = a > b ? b : a;
  let remain = max % min;

  while (1) {
    if (remain === 0) {
      return min;
    } else {
      max = min;
      min = remain;
      remain = max % min;
    }
  }
};

let gcdTemp = gcd(dist[0], dist[1]);

for (let i = 1; i < dist.length; i++) {
  gcdTemp = gcd(gcdTemp, dist[i]);
}

let num = 0;

for (let i = input[0]; i < input[input.length - 1]; i += gcdTemp) {
  num++;
}

console.log(num);
