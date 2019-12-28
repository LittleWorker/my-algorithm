import Graph from "./Graph";
import MinimumHeap from "../heap/MinimumHeap";
import Edge from "./Edge";

type Weight = number

/**
 * 切分：把图中的节点分成两部分，称为一个切分Cut
 * 横切边：如果一个边的两个端点，属于切分不同的两边，这个边称为横切边Crossing Edge
 * 切分定理：给定任意切分，横切边中权值最小的边必然属于最小生成树中的边
 */
class LazyPrimMST{
    private marked:boolean[] = [] //标记数组，标为true表示节点已经被加入最小生成树种
    private mst:Edge<Weight>[] = []
    private weightCount:Weight=0
    private minimumHeap:MinimumHeap<Edge<Weight>>;

    constructor(private g:Graph<Weight>){
        this.minimumHeap = new MinimumHeap()

        // 从节点0开始，根据切分定理，逐步扩张
        this.visit(0)
        
        while(!this.minimumHeap.isEmpty()){
            // 找到权值最小的边，用最小堆的extractMin方法即可
            let edge = this.minimumHeap.extractMin()
            // 判断这个边是不是横切边
            if(this.marked[edge.getV()] !== this.marked[edge.getW()]){
                let nextVisit 
                nextVisit = this.marked[edge.getV()]?edge.getW():edge.getV()
                this.visit(nextVisit)
                this.weightCount+=edge.getWeight()
                this.mst.push(edge)
            }
        }
    }

    private visit(index:number){
        if(!this.marked[index]){
            
            this.marked[index] = true
            //将其邻边加入最小堆中，如果其不存在与最小堆中
            let edges = this.g.getEdge(index)
            edges.forEach((edge)=>{
                // 判断edge是否是横切边，即另一个顶点是否被marked
                if(!this.marked[edge.other(index)]){
                    this.minimumHeap.insert(edge)
                }
            })
        }  
    }
}

export default LazyPrimMST
