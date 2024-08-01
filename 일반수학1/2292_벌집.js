// const input = require("fs").readFileSync("/dev/stdin").toString();
const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./2292_벌집.txt")
  .toString();

let n = +input; // 13
let room = 0;
let i = 0;
let maxRoom = 0;

while (n > 0) {
  if(i === 0) {
    maxRoom = 1
  } else {
    maxRoom = i * 6;
  }
  
  n = n - maxRoom;

  i++;
  room += 1;
}

console.log(room);
