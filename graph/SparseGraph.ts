import { AdjIterator } from "./adjIterator";

/**
 * 邻接表存储图
 */
class SparseGraph {
    private g: number[][] = []
    private edgeNum: number = 0;
    // private adjIterator
    constructor(private vertextNum: number, private directed: boolean) {
        this.edgeNum = 0
        for (let v = 0; v < vertextNum; v++) {
            this.g.push([])
        }
    }

    public V() {
        return this.vertextNum
    }

    public E() {
        return this.edgeNum
    }

    public getEdge(v: number) {
        // assert(v>=0 && v <this.vertextNum)
        return this.g[v]
    }

    public addEdge(v: number, w: number) {
        let vEdge = this.getEdge(v)
        vEdge.push(w)
        if (!this.directed) {
            let wEdge = this.getEdge(w)
            wEdge.push(v)
        }
        this.edgeNum++
    }

    public hasEdge(v: number, w: number) {
        let vEdge = this.getEdge(v)
        return vEdge.indexOf(w) !== -1
    }

    //打印边
    public showEdge() {

        for (let v = 0; v < this.vertextNum; v++) {
            let printStr = `Vertex ${v}:`
            let vEdge = this.getEdge(v)
            for (let e = 0; e < vEdge.length; e++) {
                printStr += `  ${vEdge[e]}`
            }
            console.log(printStr)
        }
    }

    public genIterator(v: number) {
        let vEdge = this.getEdge(v)
        let adjIterator: AdjIterator = { index: 0 } as AdjIterator
        adjIterator.begin = () => {
            if (vEdge.length > 0) {
                return vEdge[0]
            }
            return -1
        }

        adjIterator.next = () => {
            if (adjIterator.index < vEdge.length) {
                return vEdge[adjIterator.index++]
            }
            return -1
        }

        adjIterator.end = () => {
            return adjIterator.index >= vEdge.length
        }
    }
}

export default SparseGraph
