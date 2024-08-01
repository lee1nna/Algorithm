// 문제
// 10진법 수 N이 주어진다. 이 수를 B진법으로 바꿔 출력하는 프로그램을 작성하시오.

// 10진법을 넘어가는 진법은 숫자로 표시할 수 없는 자리가 있다. 이런 경우에는 다음과 같이 알파벳 대문자를 사용한다.

// A: 10, B: 11, ..., F: 15, ..., Y: 34, Z: 35

// 입력
// 첫째 줄에 N과 B가 주어진다. (2 ≤ B ≤ 36) N은 10억보다 작거나 같은 자연수이다.

// 출력
// 첫째 줄에 10진법 수 N을 B진법으로 출력한다.

// const input = require('fs').readFileSync('/dev/stdin').toString().trim().toString().trim().split(' ');
const input = require('fs').readFileSync(process.platform === "linux" ? "/dev/stdin" : "./11005_진법변환2.txt").toString().trim().split(' ');

const format = input.pop() // 변환 할 진법
const N = input.pop() // 10진법 숫자
let result = ''
let quotient = N // 몫
let remainder = [] // 나머지

while(Math.floor(quotient/format) !== 0) {
    remainder.unshift(quotient%format)
    quotient = Math.floor(quotient/format)
}

result = quotient < 10? String(quotient) : String.fromCharCode(Number(quotient)+55)

remainder.forEach(r => {
    result += r < 10? String(r) : String.fromCharCode(r+55)
})

console.log(result)
