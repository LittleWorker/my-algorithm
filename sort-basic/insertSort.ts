import { swapArrayValue } from '../utils/arrayUtil';

/**
 * 算法名称：插入排序
 * 算法思路：从第index=1的位置开始，每次与前面的元素比较，若当前值小于前面的值，则做一次交换（第i次循环后，确保了前i个元素是有序的）
 * 算法复杂度：O(N*N)
 * @param arr 待排序数组
 * @return 排序后的数组 
 */
function insertSort<T>(arr: T[]): T[] {
    const length = arr.length;

    for (let i = 1; i < length; i++) {
        // 写法1
        for (let j = i; j > 0 && (arr[j] < arr[j - 1]); j--) {
            swapArrayValue(arr, j, j - 1)
        }
        // 优化：使用赋值取代交换
        // const tempI = arr[i]
        // let j = i
        // for (; j > 0 && (tempI < arr[j - 1]); j--) {
        //     arr[j] = arr[j - 1]
        // }
        // arr[j] = tempI
    }
    return arr
}

export default insertSort
