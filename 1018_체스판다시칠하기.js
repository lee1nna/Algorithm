const input = require("fs")
  .readFileSync(
    process.platform === "linux" ? "/dev/stdin" : "./1018_체스판다시칠하기.txt"
  )
  .toString()
  .trim()
  .split("\n");

const [M, N] = input
  .shift()
  .split(" ")
  .map((el) => +el);

let board = new Array(M).fill(0).map((el) => new Array(N).fill(0));

for (let i = 0; i < M; i++) {
  for (let j = 0; j < N; j++) {
    board[i][j] = input[i][j];
  }
}

let WChess = new Array(8).fill(0).map((el) => new Array(8).fill(0));
let BChess = new Array(8).fill(0).map((el) => new Array(8).fill(0));

for (let i = 0; i < 8; i++) {
  for (let j = 0; j < 8; j++) {
    if ((i + j) % 2 === 0) {
      WChess[i][j] = "W";
      BChess[i][j] = "B";
    } else {
      WChess[i][j] = "B";
      BChess[i][j] = "W";
    }
  }
}

let compareW = 0;
let compareB = 0;
let min = 0;

for (let i = 0; i <= M - 8; i++) {
  for (let j = 0; j <= N - 8; j++) {
    for (let k = 0; k < 8; k++) {
      for (let m = 0; m < 8; m++) {
        //WChess
        if (WChess[k][m] !== board[k + i][m + j]) {
          compareW += 1;
        }
        if (BChess[k][m] !== board[k + i][m + j]) {
          compareB += 1;
        }
      }
    }

    min = Math.min(compareB, compareW, min);

    compareW = 0;
    compareB = 0;
  }
}

console.log(min);
