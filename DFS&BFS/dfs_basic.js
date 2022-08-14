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
    let visited = []
    let needVisit = []

    needVisit.push(startNode)

    while(needVisit.length !== 0) {
        let node = needVisit.shift()
        if(!visited.includes(node)) {
            visited.push(node)
            needVisit = [...needVisit, ...graph[node]]
        }

    }

    return visited
}

console.log(DFS(graph, 1))