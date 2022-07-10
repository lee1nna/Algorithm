// N이 1이 될 때까지 두 과정 중 하나를 반복적으로 선택해서 수행
// 1. N에서 1을 뺀다.
// 2. N을 K로 나눈다. (나누어 떨어질 경우에만)
// N과 K가 주어질 때 N이 1이 될 떄까지 1번 혹은 2번의 과정을 수행해야하는 최소 횟수를 구하는 프로그램 작성

function solution(n, k) {
    let answer = null;

    while(n !== 1) {
        if((n % k) === 0) {
            n /= k
            answer += 1
        } else if(((n-1) % k === 0)) {
            n -= 1
            answer += 1
        }
    }
    return answer
}