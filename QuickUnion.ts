/**
 * 每个节点存储的是其父节点的索引，若该节点本身是根节点，则存储自身的索引
 */
class QuickUnion {
    private parent: number[] = []
    private sz:number[] =[] // sz优化，存储的是当前根节点存储的
    private rank:number[] =[] // rank优化，i节点存储的是以i为根的节点数目

    constructor(private count: number) {
        for (let i = 0; i < count; i++) {
            this.parent.push(i)
            this.sz.push(1)
            this.rank.push(1)
        }
    }


    public find(i:number){
        while(this.parent[i] !== i){
            i = this.parent[i]
        }
        return i
    }

    public union(p:number,q:number){
        // 找到两个节点的parent,将其中一方的parent指向另一方的parent
        let parentP = this.find(p)
        let parentQ = this.find(q)
        if(parentP === parentQ){
            return
        } 
        this.parent[parentP] = parentQ
    }

    public unionSz(p:number,q:number){
        // 找到两个节点的parent,将其中一方的parent指向另一方的parent
        let parentP = this.find(p)
        let parentQ = this.find(q)
        if(parentP === parentQ){
            return
        } 
        // 将SIZE较小的parent指向SIZE较大的parent
        if(this.sz[parentP] < this.sz[parentQ]){
            this.parent[parentP] = parentQ
            this.sz[parentQ] += this.sz[parentP]
        }else{
            this.parent[parentQ] = parentP
            this.sz[parentP] += this.sz[parentQ]
        }
    }

    public unionRank(p:number,q:number){
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

export default QuickUnion
