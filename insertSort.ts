import {sort} from './publicInterface'

/**
 * 算法名称：插入排序
 * 算法思路：从第index=1的位置开始，每次与前面的元素比较，若当前值小于前面的值，则做一次交换（第i次循环后，确保了前i个元素是有序的）
 * 算法复杂度：O(N*N)
 * @param arr 待排序数组
 * @param sort 自定义的比较函数
 * @return 排序后的数组 
 */
function insertSort<T>(arr:T[],sort?:sort<T>):T[]{
    const length = arr.length;

    for(let i=1;i<length;i++){
        // 优化：使用赋值取代交换
        const tempI = arr[i]
        for(let j=i;j>0;j--){
            let compareResult = sort ? sort(tempI , arr[j-1]): (tempI < arr[j-1])
            if( compareResult ){
                arr[j] = arr[j-1]
                // [arr[j] , arr[j-1]] = [arr[j-1] , arr[j]]
            }else{
                // 因为此时前i-1个元素是有序的，不需要再与剩下的元素比较
                arr[j] = tempI
                break
            }
        }
    }
    return arr
}

export default insertSort
