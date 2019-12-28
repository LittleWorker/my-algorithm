import MaxHeap from "./maxHeap"

function heapSort2(arr:number[]):number[]{
    let maxHeap = new MaxHeap(arr)
    const n = arr.length;
    for(let i=n-1;i>=0;i--){
        arr[i] = maxHeap.extractMax()
    }
    return arr
}

export default heapSort2
