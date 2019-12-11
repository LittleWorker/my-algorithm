function quickSort2<T>(arr: T[]): T[] {
    const length = arr.length;

    __quickSort2(arr, 0, length - 1)
    return arr
}

/**
 * 对[l,r]区间内的数据进行归并排序
 * @param arr 
 * @param l 
 * @param r 
 */
function __quickSort2<T>(arr: T[], l: number, r: number) {
    if(l>=r){
        return
    }

    let p = __partition2(arr,l,r)
    __quickSort2(arr,l,p-1)
    __quickSort2(arr,p+1,r)
}

function __partition2<T>(arr: T[], l: number, r: number): number {
    //优化：随机选择一个位置，避免在进行近乎有序数组的排序时，算法复杂度退化到N*N
    let randomIndex = Math.ceil(Math.random() * (r - l)) + l;
    [arr[l], arr[randomIndex]] = [arr[randomIndex], arr[l]]

    // arr[l,i) <= v  arr(j,r]>=v
    let i = l+1, j = r, v = arr[l]
    while(true){
        while( i<=r && arr[i] < v){
            i++
        }
        while( j>=l+1 && arr[j] > v){
            j--
        }
        if(i>=j){
            break
        }
        [arr[i],arr[j]] = [arr[j],arr[i]]
        i++
        j--
    }
    [arr[l],arr[j]] = [arr[j],arr[l]]
    return j
}

export default quickSort2
