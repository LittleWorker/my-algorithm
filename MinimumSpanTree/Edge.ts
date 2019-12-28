class Edge<Weight>{
    /**
     * 构造函数
     * @param v 边的起点
     * @param w 边的终点
     * @param weight 边的权重
     */
    constructor(private v: number, private w: number, private weight: Weight) {

    }

    //
    public getV() {
        return this.v
    }

    public getW() {
        return this.w
    }

    public getWeight(){
        return this.weight
    }

    public other(x: number) {
        return x === this.v ? this.w : this.v
    }

    public valueOf(){
        console.log('value Of execute')
        return this.weight
    }
}

export default Edge
