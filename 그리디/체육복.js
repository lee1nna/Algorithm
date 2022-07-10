function solution(n, lost, reserve) {
    var answer = n - lost.length;

    // 여벌 체육복이 있으나 체육복을 도난 당해서 내가 내 여벌 체육복을 사용하는 경우
    let set_lost = lost.filter((l) => !reserve.includes(l));
    let set_reserve = reserve.filter((r) => !lost.includes(r));
    answer = answer + (lost.length - set_lost.length);

    set_lost.sort((a,b) => a-b); // 오름차순 정렬

    // 내 앞이나 뒷번호 학생에게 체육복을 빌려주는 경우
    set_lost.forEach((l) => {
        if(set_reserve.includes(l-1)) {
            set_reserve = set_reserve.filter((r) => r !== l-1);
            answer++;
        }
        else if(set_reserve.includes(l+1)) {
            set_reserve = set_reserve.filter((r) => r !== l+1);
            answer++;
        }
    })
    return answer;
}