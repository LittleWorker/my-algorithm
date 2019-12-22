import SparseGraph from "./SparseGraph"

const VERTEXT = 20
const EDGE = 20

function testSparseGraph() {
    // 实例化一个sparse graph
    let sparseGraph = new SparseGraph(20, false)// 无向图

    // 随机添加EDGE条边
    for (let i = 0; i < EDGE; i++) {
        let v = Math.floor(Math.random() * VERTEXT)
        let w = Math.floor(Math.random() * VERTEXT)
        sparseGraph.addEdge(v, w)
    }

    sparseGraph.showEdge()
}

export {
    testSparseGraph
}
