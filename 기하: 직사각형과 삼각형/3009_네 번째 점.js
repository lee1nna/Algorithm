const input = require("fs")
  .readFileSync(
    process.platform === "linux" ? "/dev/stdin" : "./3009_네 번째 점.txt"
  )
  .toString()
  .trim()
  .split("\n")
  .map((el) => el.split(" "))
  .map((el) => el.map((el) => +el));

let x = [];
let y = [];

for (let i = 0; i < 2; i++) {
  for (let j = 0; j <= 2; j++) {
    if (i === 0) {
      x.push(input[j][i]);
    } else {
      y.push(input[j][i]);
    }
  }
}

let tempX = x[0];
let replaceX = 0;
let sameX = 0;
let notSameX = 0;

x.forEach((el) => {
  if (tempX === el) {
    sameX += 1;
  } else {
    notSameX += 1;
    replaceX = el;
  }
});

if (notSameX === 1) {
  tempX = replaceX;
}

let tempY = y[0];
let replaceY = 0;
let sameY = 0;
let notSameY = 0;

y.forEach((el) => {
  if (tempY === el) {
    sameY += 1;
  } else {
    notSameY += 1;
    replaceY = el;
  }
});

if (notSameY === 1) {
  tempY = replaceY;
}

console.log(tempX, tempY);
