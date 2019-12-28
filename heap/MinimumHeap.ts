import { swapArrayValue } from "../utils/arrayUtil";

class MinimumHeap<T>{
    private count:number=0;
    private heap:T[]=[] //将完全二叉树存储在数组中，从索引为0的地方开始存储

    constructor(){

    }

    /**
     * 针对该对象，将该对象与其父节点的值进行比较，若小于其父节点的值，则进行交换，否则终止；持续该操作直至根节点
     * @param index 待操作对象的数组索引
     */
    private shiftUp(index:number){
        while(index>0){
            let parentIndex = Math.floor((index-1)/2)
            if(this.heap[index] < this.heap[parentIndex]){
                // 交换值
                swapArrayValue(this.heap,index,parentIndex)
                index = parentIndex
            }
        }
    }

    /**
     * 对索引的值与其子节点的值比较，若大于子节点的值，则交换，持续到该值比其子节点值都小或者无子节点
     * @param index 待处理值的索引
     */
    private shiftDown(index:number){
        // leftChildIndex 2*index +1
        // rightChildIndex 2*index +2
        while((2*index+1)<this.count){
            // 左右节点比较，得到较小值的节点
            let j = 2*index+1
            if(j+1 <this.count && this.heap[j] > this.heap[j+1]){
                j = j+1
            }

            // 较小值与index索引对应的值比较
            if(this.heap[index]>this.heap[j]){
                //swap
                swapArrayValue(this.heap,index,j)
                index = j
            }else{
                break
            }    
        }
    }

    /**
     * 在最小堆中插入一个新的值
     * 处理逻辑：在堆的最后位置新增一个节点，将值存储在这个节点上，然后对这个节点进行一次shiftUp操作
     * @param value 待插入的值
     */
    public insert(value:T){
        this.heap.push(value)
        this.shiftUp(this.count++)
    }

    /**
     * 提取最小堆中的最小值（会将最小值从堆中删除）
     * 处理逻辑：堆顶元素的值用minimum变量缓存，将堆中最后一个元素的值放在堆顶，删掉最后一个元素，然后对堆顶元素进行一次shiftDown操作
     */
    public extractMin(){
        let minimum = this.heap[0]
        this.heap.pop()
        this.count--
        this.shiftDown(0)
        return minimum
    }

    public getSize(){
        return this.count
    }

    public isEmpty(){
        return this.count === 0
    }
}

export default MinimumHeap
