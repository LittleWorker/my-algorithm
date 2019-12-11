import { swapArrayValue } from '../utils/arrayUtil'
/**
 * 用数组存储最大堆
 * 最大堆定义：完全二叉树，并且子节点的值都小于其父节点
 * 在用数组存储时，数组索引为0的位置不存放数据（即根节点存放在数组索引为1的位置）
 * 这样存储的情况下，就具备了这样的性质，对于索引为i的元素，其左子节点的索引为2i，其右子节点的索引为2i+1，其父节点的索引为 i/2（取整）
 */
class MaxHeap {
    private data: number[] = [-999999] // 索引为0的元素不存实际数据
    private count: number = 0
    constructor() {
        //  this.count=0
    }

    private shiftUp(index: number) {
        while (true) {
            let parentIndex = Math.floor(index / 2)
            if (index > 1 && this.data[parentIndex] < this.data[index]) {
                // swap value
                [this.data[parentIndex], this.data[index]] = [this.data[index], this.data[parentIndex]]
                index = parentIndex
            } else {
                break
            }
        }
    }

    private shiftDown() {
        // 将最后一个元素的值赋值给第一个元素
        this.data[1] = this.data[this.count - 1]
        this.data.pop()
        this.count--
        let currentIndex = 1
        while (true) {
            let leftChildIndex = 2 * currentIndex
            let rightChildIndex = leftChildIndex + 1
            let currentValue = this.data[currentIndex]

            if (leftChildIndex >= this.count) {
                // 左右子节点都超出范围
                break
            } else if (leftChildIndex === this.count - 1) {
                // 左子节点是最后一个元素
                let leftChildValue = this.data[leftChildIndex]
                if (currentValue < leftChildValue) {
                    //swap
                    swapArrayValue(this.data, currentIndex, leftChildIndex);
                }
                break
            } else {
                let leftChildValue = this.data[leftChildIndex]
                let rightChildValue = this.data[rightChildIndex]
                if (currentValue > leftChildValue && currentValue > rightChildValue) {
                    // 比左右子节点的值都大，说明已经交换到正确位置了
                    break
                } else {
                    // 和较大的值进行交换
                    let leftChildValue = this.data[leftChildIndex]
                    let rightChildValue = this.data[rightChildIndex]
                    let largerIndex = leftChildValue > rightChildValue ? leftChildIndex : rightChildIndex
                    swapArrayValue(this.data, currentIndex, largerIndex);
                    // 继续下一轮比较
                    currentIndex = largerIndex
                }
            }
        }
    }

    public getSize() {
        return this.count
    }

    public isEmpty() {
        return this.count === 0
    }

    public insert(item: number) {
        this.count++
        this.data.push(item)
        this.shiftUp(this.count)
    }

    public extractMax(): number {
        let max = this.data[1]
        this.shiftDown()
        return max
    }

    public print() {
        for (let i = 1; i < this.count; i++) {
            console.log('=> ', this.data[i])
        }
    }
}

export default MaxHeap
