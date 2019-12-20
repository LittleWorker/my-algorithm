/**
 * 路径压缩(Path Compression)优化的并查集实现
 */
class QuickUnionPC {
    private parent: number[] = []
    private rank:number[] =[] // rank优化，i节点存储的是以i为根的节点数目

    constructor(private count: number) {
        for (let i = 0; i < count; i++) {
            this.parent.push(i)
            this.rank.push(1)
        }
    }


    public find(i:number){
        // while(this.parent[i] !== i){
        //     // 这一句代码就实现了路径压缩的优化
        //     // 直接指向父节点的父节点，相当于跳过了一层
        //     this.parent[i] = this.parent[this.parent[i]] 
        //     i = this.parent[i]
        // }
        // return i
        // 另外一种递归的路径压缩实现
        while(this.parent[i] !== i){
            this.parent[i] = this.find(this.parent[i])
        }
        return this.parent[i]
    }

    public union(p:number,q:number){
        let parentP = this.find(p)
        let parentQ = this.find(q)
        if(parentP === parentQ){
            return
        } 

        if(this.rank[parentP] < this.rank[parentQ]){
            this.parent[parentP] = parentQ
        }else if(this.rank[parentP] > this.rank[parentQ]){
            this.parent[parentQ] = parentP
        }else {
            // this.rank[parentP] === this.rank[parentQ]
            this.parent[parentP] = parentQ
            this.rank[parentQ] += 1
        }
    }
}

export default QuickUnionPC
