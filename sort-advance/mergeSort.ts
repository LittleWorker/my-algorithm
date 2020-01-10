/**
 * 算法名称：归并排序
 * 算法思路：使用递归的方式，每次将数组一分为二直至数组长度为1，再将长度为1的数组归并为长度为2的数组，长度为2的数组归并为长度为4的数组，直至归并到原始长度
 * 算法复杂度：O(N*log(N))
 * @param arr 待排序数组
 * @return 排序后的数组
 */
function mergeSort<T>(arr: T[]): T[] {
    const length = arr.length
    __mergeSort(arr, 0, length - 1)
    return arr

}

/**
 * 递归排序函数，对arr[l,...,r]的范围进行排序
 * @param arr 待排序数组
 * @param l 起始位置 前闭
 * @param r 结束位置 后闭
 */
function __mergeSort<T>(arr: T[], l: number, r: number) {
    // 递归结束条件
    if (l >= r) {
        return
    }

    let mid = Math.floor((l + r) / 2)
    __mergeSort(arr, l, mid)
    __mergeSort(arr, mid + 1, r)
    // 优化1
    if(arr[mid] <= arr[mid+1])
        return
    __merge(arr, l, mid, r)
}

export function __merge<T>(arr: T[], l: number, mid: number, r: number) {
    //辅助数组，此处使用了额外的空间（最大长度为N）
    let aux: T[] = []
    for (let i = l; i <= r; i++) {
        aux[i - l] = arr[i]
    }

    let i = l, j = mid + 1, k = l;

    for (; k <= r; k++) {
        if (i > mid) {
            arr[k] = aux[j - l]
            j++
        } else if (j > r) {
            arr[k] = aux[i - l]
            i++
        } else if (aux[i - l] < aux[j - l]) {
            arr[k] = aux[i - l]
            i++
        } else {
            arr[k] = aux[j - l]
            j++
        }
    }
}

export default mergeSort
