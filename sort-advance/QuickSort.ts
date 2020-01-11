import { swapArrayValue, getRandomValue } from '../utils/commonUtils';

class QuickSort {
    private count = 0;

    constructor(private arr: number[]) {
        this.count = arr.length;
        this.__quickSort(0, this.count - 1);
    }

    public getArr(): number[] {
        return this.arr;
    }

    public quickSort() {
        this.__quickSort(0, this.count - 1)
    }

    /**
     * 递归的快速排序方法，调用partition方法得到中间点，然后再对左侧和右侧递归进行快速排序
     * @param l 左闭
     * @param r 右闭
     */
    private __quickSort(l: number, r: number): void {
        if (l >= r) {
            return;
        }
        const mid = this.__partition(l, r);
        this.__quickSort(l, mid - 1);
        this.__quickSort(mid + 1, r);
    }

    /**
     * 选择一个基准值h，对数组的[l,r]范围进行操作，找打一个位置p，使得arr[l,p]<h && arr[p+1,r]>=h
     * @param l 区间左侧，闭合
     * @param r 区间右侧，闭合
     */
    private __partition(l: number, r: number): number {
        // 以l位置的值作为标准值h
        // 优化：随机选择一个节点的值，避免在有序的情况下，复杂度上升为N*N
        let randomIndex = getRandomValue(l, r)
        swapArrayValue(this.arr, l, randomIndex)
        const h = this.arr[l];
        let i = l;
        let j = l + 1;
        for (; j <= r; j++) {
            if (this.arr[j] < h) {
                swapArrayValue(this.arr, i + 1, j);
                i += 1;
            }
        }
        swapArrayValue(this.arr, i, l);
        return i;
    }

    public quickSort2Ways() {
        this.__quickSort2Ways(0, this.count - 1)
    }

    private __quickSort2Ways(l: number, r: number) {
        if (l >= r) {
            return;
        }
        let middle = this.__partition2Ways(l, r)
        this.__quickSort2Ways(l, middle - 1)
        this.__quickSort2Ways(middle + 1, r)
    }

    /**
     * 优化了存在大量重复数据情况下的数组划分
     * @param l 
     * @param r 
     */
    private __partition2Ways(l: number, r: number): number {
        // 随机选择一个节点的值，避免在有序的情况下，复杂度上升为N*N
        let randomIndex = getRandomValue(l, r)
        swapArrayValue(this.arr, l, randomIndex)
        const h = this.arr[l];
        // arr[l,i) <=v ;arr(j,r]>=v
        let i = l + 1, j = r
        while (true) {
            while (i <= r && this.arr[i] < h) {
                i++
            }
            while (j >= l + 1 && this.arr[j] > h) {
                j--
            }
            if (i < j) { break }
            swapArrayValue(this.arr, i, j)
            i++
            j--
        }
        swapArrayValue(this.arr, l, j)
        return j
    }

    public quickSort3Ways() {
        this.__quickSort3Ways(0, this.count - 1)
    }

    private __quickSort3Ways(l: number, r: number) {
        if (l >= r) {
            return;
        }
        let [lt, gt] = this.__partition3Ways(l, r)
        this.__quickSort3Ways(l, lt)
        this.__quickSort3Ways(gt, r)
    }

    /**
     * 将数组划分为三部分，<h  =h  >h
     * @param l 区间左侧，闭合
     * @param r 区间右侧，闭合
     */
    private __partition3Ways(l: number, r: number): [number, number] {
        // 以l位置的值作为标准值h
        // 优化：随机选择一个节点的值，避免在有序的情况下，复杂度上升为N*N
        let randomIndex = getRandomValue(l, r)
        swapArrayValue(this.arr, l, randomIndex)
        const h = this.arr[l];
        // arr[l+1,lt] < v | arr[lt+1,i-1] = v | arr[gt,r] > v
        let i = l + 1;
        let lt = l, gt = r + 1;
        while (i < gt) {
            if (this.arr[i] < h) {
                swapArrayValue(this.arr, i, lt + 1)
                lt++
                i++
            }
            else if (this.arr[i] === h) {
                i++
            }
            else {
                // this.arr[i] > h
                swapArrayValue(this.arr, i, gt - 1)
                gt--
            }
        }
        swapArrayValue(this.arr, l, lt)
        lt--
        return [lt, gt];
    }
}

export default QuickSort;
