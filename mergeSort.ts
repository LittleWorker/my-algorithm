/**
 * 算法名称：归并排序
 * 算法思路：
 * 算法复杂度：O(N*log(N))
 * @param arr 待排序数组
 * @return 排序后的数组
 */
function mergeSort<T>(arr:T[]):T[]{
    const length = arr.length
    __mergeSort(arr,0,length-1)
    return []

}

/**
 * 递归排序函数，对arr[l,...,r]的范围进行排序
 * @param arr 待排序数组
 * @param l 起始位置 前闭
 * @param r 结束位置 后闭
 */
function __mergeSort<T>(arr:T[],l:number,r:number){
    // 递归结束条件
    if(l>=r){
        return 
    }

    let mid = Math.floor((l+r)/2)
    __mergeSort(arr,l,mid)
    __mergeSort(arr,mid+1,r)
    __merge(arr,l,mid,r)
}

function __merge<T>(arr:T[],l:number,mid:number,r:number){
    
}
