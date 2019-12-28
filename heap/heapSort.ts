import { getParentIndex, getLeftChildIndex } from "./heapHelp";
import { swapArrayValue } from "../utils/arrayUtil";

/**
 * 原地堆排序(在原始数组上进行排序，堆的起始索引为0)
 */

function heapSort(arr: number[]): number[] {
    const n = arr.length

    // heapify使其成为最大堆
    let heapifyIndex = getParentIndex(n - 1) // 最后一个元素的父节点 === 最后一个非叶子节点的索引
    for (let i = heapifyIndex; i >= 0; i--) {
        __shiftDown(arr, n, i)
    }

    // 现在数组中的元素按照最大堆的方式存储，索引为0的第一个元素是当前数组中的最大值，
    // 我们要求的是升序排列，所以将第一个元素与数组的最后一个元素交换
    for (let i = n - 1; i > 0; i--) {
        swapArrayValue(arr, 0, i)
        // 交换后，最后一个元素已经是最大值，而第一个元素需要shiftDown使 0-i区间满足最大堆
        __shiftDown(arr, i - 1, 0)
    }

    return arr
}


/**
 * 
 * @param arr 数组
 * @param length 希望进行最大堆存储的长度（length <=arr.length）
 * @param index shiftDown的Index
 */
function __shiftDown(arr: number[], length: number, index: number) {
    while (getLeftChildIndex(index) <= length - 1) {
        let j = getLeftChildIndex(index)
        if (j + 1 <= length - 1 && arr[j + 1] > arr[j]) {
            j++
        }

        if (arr[index] < arr[j]) {
            swapArrayValue(arr, index, j)
            index = j
        } else {
            break
        }
    }
}

export default heapSort
