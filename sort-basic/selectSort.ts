/**
 * 算法名称：选择排序
 * 算法思路：第一次遍历整个数组，找到最小值所在的索引，然后将其与索引0的值进行交换，保证了索引0是最小值，
 *          第二次从index=1开始遍历，找到最小值所在的索引，将其与索引1的值进行交换，以此类推
 * 算法复杂度：O(N*N)
 * @param arr 待排序的数组
 * @param sort 排序方法，接受2个参数，返回一个bool结果
 * @return result 升序排序后的数组
 */
function selectSort<T>(arr:T[]):T[]{
    const arrLen = arr.length;

    for(let i=0;i<arrLen;i++){
        // 最小值所在的位置索引
        let minIndex = i
        for (let j= i+1;j<arrLen;j++){
            let compareResult  = arr[j] < arr[minIndex]
            if( compareResult ){
                minIndex = j
            }
        }
        // 交换两个位置的值，用ES6语法很简单
        [arr[i],arr[minIndex]] = [arr[minIndex],arr[i]]
    }
    return arr
}

export default selectSort
