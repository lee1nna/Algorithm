function solution(numbers, target) {
    let solNum = 0;
    const length = numbers.length

    function dfs(count, sum) {
        if(length === count) {
            if(sum === target) {
                solNum ++
            }
            return ;
        }

        dfs(count+1, sum + numbers[count])
        dfs(count+1, sum - numbers[count])
    }

    dfs(0,0)

    return solNum
}

solution([1,1,1,1,1], 3)