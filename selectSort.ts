import {sort} from './publicInterface'

/**
 * 算法名称：选择排序
 * 算法思路：第一次遍历将最小值放在起始位置(index:0)，第二次从index=1开始遍历将最小值放在index=1的位置，以此类推
 * 算法复杂度：O(N*N)
 * @param arr 待排序的数组
 * @param sort 排序方法，接受2个参数，返回一个bool结果
 * @return result 升序排序后的数组
 */
function selectSort<T>(arr:T[], sort?:sort<T>):T[]{
    const arrLen = arr.length;

    for(let i=0;i<arrLen;i++){
        // 最小值所在的位置索引
        let minIndex = i
        for (let j= i+1;j<arrLen;j++){
            let compareResult  = sort ? sort(arr[j] , arr[minIndex]): (arr[j] < arr[minIndex])
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
