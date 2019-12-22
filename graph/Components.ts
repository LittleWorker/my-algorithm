import SparseGraph from "./SparseGraph";
type Graph = SparseGraph
/**
 * 图的联通性
 */
class Components {
    private vertexNum: number
    private visited: boolean[] = []
    private count: number = -1

    constructor(private g: Graph) {
        let vertexNum = g.V()
        this.vertexNum = vertexNum
        for (let v = 0; v < vertexNum; v++) {
            this.visited.push(false)
        }

        for (let v = 0; v < vertexNum; v++) {
            this.visited[v] = true
            this.dfs(v)
            this.count++
        }
    }

    private dfs(v: number) {
        let vEdge = this.g.getEdge(v)
        for (let w = 0; w < vEdge.length; w++) {
            if (!this.visited[vEdge[w]]) {
                this.visited[vEdge[w]] = true
                this.dfs(vEdge[w])
            }
        }
    }

    public getCount() {
        return this.count
    }
}

export default Components
