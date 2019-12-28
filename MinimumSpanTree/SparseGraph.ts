import Edge from "./Edge";

/**
 * 稀疏图常用邻接表进行存储
 */
class SparseGraph<Weight> {
    private g: Edge<Weight>[][] = []
    private edgeNum: number = 0;

    /**
     * 构造函数
     * @param vertexNum 顶点数
     * @param directed 是否有向图
     */
    constructor(private vertexNum: number, private directed: boolean) {
        for (let v = 0; v < vertexNum; v++) {
            this.g.push([])
        }
    }

    /**
     * 获取图的顶点数
     */
    public V() {
        return this.vertexNum
    }

    /**
     * 获取图中所有的边数
     */
    public E() {
        return this.edgeNum
    }

    /**
     * 获取图中顶点v的边（实际上是与顶点v邻接的其他顶点）
     * @param v 顶点
     * @return v的邻接顶点数组
     */
    public getEdge(v: number) {
        // assert(v>=0 && v <this.vertexNum)
        return this.g[v]
    }

    /**
     * 添加一条边v-w的边
     * @param v 顶点v
     * @param w 顶点w
     */
    public addEdge(v: number, w: number,weight:Weight) {
        //不处理平行边的情况，即v-w之间可以存在多条边
        let vEdge = this.getEdge(v)
        vEdge.push(new Edge<Weight>(v,w,weight))
        if (!this.directed) {
            let wEdge = this.getEdge(w)
            wEdge.push(new Edge<Weight>(w,v,weight))
        }
        this.edgeNum++
    }

    /**
     * 判断顶点v与w之间是否存在边
     * @param v 顶点v
     * @param w 顶点w
     */
    public hasEdge(v: number, w: number) {
        let vEdge = this.getEdge(v)
        vEdge.forEach((item:Edge<Weight>)=>{
            if(item.getW() === w){
                return true
            }
        })
        return false
    }

    /**
     * 打印图中的边
     */
    public showEdge() {
        for (let v = 0; v < this.vertexNum; v++) {
            let printStr = `Vertex ${v}:`
            let vEdge = this.getEdge(v)
            for (let e = 0; e < vEdge.length; e++) {
                let edge = vEdge[e]
                printStr += `  ${edge.getWeight()}`
            }
            console.log(printStr)
        }
    }
}

export default SparseGraph
