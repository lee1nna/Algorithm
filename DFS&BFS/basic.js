const graph = {
    1: [2,3,8],
    2: [1,7],
    3: [4,5],
    4: [3,5],
    5: [3,4],
    6: [7],
    7: [6,8],
    8: [1,7]
}

const DFS = (graph, startNode) => {
    const visited = [] // 탐색 마친 노드들
    let needVisit = [] // 탐색 해야 할 노드들

    needVisit.push(startNode)

    while(needVisit.length !== 0) {
        const node = needVisit.shift() // 최근접 노드부터 탐색 시작
        if(!visited.includes(node)) { // 아직 방문이 안 된 노드면
            visited.push(node) // 방문처리
            needVisit = [...graph[node], ...needVisit]
        }
    }

    return visited
}

console.log(DFS(graph, 1))