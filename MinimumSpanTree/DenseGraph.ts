import Edge from "./Edge"

/**
 * 稠密图常用邻接矩阵存储
 */
class DenseGraph<Weight> {
    private g: (Edge<Weight>|null)[][] = []
    private edgeNum: number = 0 // 记录有多少条边

    /**
     * 构造函数
     * @param vertexNum 顶点数目
     * @param directed 是否有向图
     */
    constructor(private vertexNum: number, private directed: boolean) {
        for (let i = 0; i < vertexNum; i++) {
            let row: (Edge<Weight>|null)[] = new Array(vertexNum)
            this.g.push(row.fill(null))
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
     * @return 与v有边连接的顶点数组
     */
    public getEdge(v:number):Edge<Weight>[]{
        let edgeArr = this.g[v]
        let result:Edge<Weight>[] = []
        // 过滤出为true的点
        edgeArr.forEach((item,index)=>{
            if(item){
                result.push(item)
            }
        })
        return result
    }

    /**
     * 判断顶点v与w之间是否存在边
     * @param v 顶点v
     * @param w 顶点w
     */
    public hasEdge(v: number, w: number): boolean {
        // assert v,w >= 0 && v,w < vertexNum
        return this.g[v][w] !==null
    }

    /**
     * 添加一条边v-w的边
     * @param v 顶点v
     * @param w 顶点w
     */
    public addEdge(v: number, w: number,weight:Weight) {
        // assert v,w >= 0 && v,w < vertexNum
        // 处理平行边
        if (this.hasEdge(v, w)) {
            this.edgeNum--
            // return
        }
        this.g[v][w] = new Edge(v,w,weight)
        if (!this.directed) {
            this.g[w][v] = new Edge(w,v,weight)
        }
        this.edgeNum++
    }

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

export default DenseGraph
