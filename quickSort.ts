

function quickSort<T>(arr: T[]): T[] {
    const length = arr.length;

    __quickSort(arr, 0, length - 1)
    return arr
}

/**
 * 内部函数：对arr的[l,r]区间进行快速排序
 * @param arr 待排序数组
 * @param l 起点位置
 * @param r 终点位置
 */
function __quickSort<T>(arr: T[], l: number, r: number) {
    if (l >= r) {
        return
    }

    let p = __partition(arr, l, r)
    __quickSort(arr, l, p-1)
    __quickSort(arr, p + 1, r)
}

/**
 * 内部函数：对数组arr的[l,r]区间进行分割，随机选择一个元素的值作为 v，经过比较替换使得arr[l,p]<v arr[p+1,r]>=v
 * @param arr 
 * @param l 
 * @param r 
 */
function __partition<T>(arr: T[], l: number, r: number): number {
    //随机选择一个位置，避免在进行近乎有序数组的排序时，算法复杂度退化到N*N
    let randomIndex= Math.ceil(Math.random()*(r-l))+l;
    [arr[l],arr[randomIndex]] = [arr[randomIndex],arr[l]]
    let i = l, j = l+1, v = arr[l]
    for (; j <= r; j++) {
        if (arr[j] < v) {
            [arr[i + 1], arr[j]] = [arr[j], arr[i + 1]]
            i++
        }
    }
    [arr[l], arr[i]] = [arr[i], arr[l]]
    return i
}

export default quickSort
