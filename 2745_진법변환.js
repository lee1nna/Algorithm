// 문제
// B진법 수 N이 주어진다. 이 수를 10진법으로 바꿔 출력하는 프로그램을 작성하시오.

// 10진법을 넘어가는 진법은 숫자로 표시할 수 없는 자리가 있다. 이런 경우에는 다음과 같이 알파벳 대문자를 사용한다.

// A: 10, B: 11, ..., F: 15, ..., Y: 34, Z: 35

// 입력
// 첫째 줄에 N과 B가 주어진다. (2 ≤ B ≤ 36)

// B진법 수 N을 10진법으로 바꾸면, 항상 10억보다 작거나 같다.

// 출력
// 첫째 줄에 B진법 수 N을 10진법으로 출력한다.

// const input = require('fs').readFileSync('/dev/stdin').toString().trim().toString().trim().split(' ');
const input = require('fs').readFileSync(process.platform === "linux" ? "/dev/stdin" : "./2745_진법변환.txt").toString().trim().split(' ');

const format = input.pop() // 진법
const N = input.pop().split('').map(n => isNaN(Number(n))? n : Number(n)) // 숫자
let result = 0

N.reverse().forEach((a, idx) => {
    if(typeof a === 'number') {
        result += Number(a * Math.pow(format, idx))
    } else {
        result += Number((a.charCodeAt()-55) * Math.pow(format, idx))

    }
})

console.log(result)