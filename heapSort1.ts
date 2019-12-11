import MaxHeap from './maxHeap'

function heapSort1(arr: number[]): number[] {
    const length = arr.length;
    const maxHeap = new MaxHeap()
    for (let i = 0; i < length; i++) {
        maxHeap.insert(arr[i])
    }

    for (let i = length - 1; i >= 0; i--) {
        arr[i] -= maxHeap.extractMax()
    }

    return arr
}

export default heapSort1
