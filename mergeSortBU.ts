import { __merge } from './mergeSort'

/**
 * 算法名称：归并排序（自底向上）
 * 算法思路：与归并排序一致，自底向上实现的版本，只需要使用循环，而不需要使用递归
 * 时间复杂度：O(N*logN)
 * 空间复杂度：O(N)
 * @param arr 待排序数组
 * @return 排序后的数组
 */
function mergeSortBU<T>(arr: T[]): T[] {
    const length = arr.length;
    for (let sz = 1; sz <= length; sz = sz * 2) {
        // 对 arr[i] arr[i+sz-1] arr[i+2*sz-1]
        for (let i = 0; i < length - sz; i = i + 2 * sz) {
            __merge(arr, i, i + sz - 1, Math.min(i + 2 * sz - 1, length-1))
        }
    }
    return arr
}

export default mergeSortBU
