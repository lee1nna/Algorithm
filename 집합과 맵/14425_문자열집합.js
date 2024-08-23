let input = require("fs")
  .readFileSync(
    process.platform === "linux" ? "/dev/stdin" : "./14425_문자열집합.txt"
  )
  .toString()
  .trim()
  .split("\n");



const [NM, ...arr] = input
const [N, M] = NM.split(' ').map(el => +el)

const NArr = arr.slice(0, N)
const MArr = arr.slice(N,N+M)

let obj = {}

NArr.forEach((arr, idx) => {
obj[arr] = idx
})

console.log(MArr.filter(arr => obj[arr] !== undefined).length)