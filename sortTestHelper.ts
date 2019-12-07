import {sort} from './publicInterface'

/**
 * 生成指定长度length，指定范围区间[rangeL,rangeR]的随机数组
 * @param length 数组长度
 * @param rangeL 取值范围最小值
 * @param rangeR 取值范围最大值
 */
function generateRandomArray(length:number,rangeL:number,rangeR:number):number[]{
    if(rangeL > rangeR){
        console.log('取值范围不正确')
        return []
    }
    let result:number[] = []
    for(let i = 0;i<length;i++){
        let randomVal = Math.round(Math.random()*(rangeR-rangeL)+rangeL);
        result.push(randomVal)
    }
    return result
}

function perfermenceSort<T>(sortName:string, sortAlgorithm: (arr:T[], sort?:sort<T>) => T[], arr:T[],sort?:sort<T>){
    console.log('===== Begin Perfermence Sort =====')
    const startTime = new Date().getTime()
    sortAlgorithm(arr)
    const endTime = new Date().getTime()
    console.log('===== End Perfermence Sort =====')

    let checkResult = sort ? isSorted(arr,sort):isSorted(arr)
    if(!checkResult){
        console.log('Not Sorted!')
        return
    }
    const costTime = ((endTime - startTime)/1000).toFixed(3)
    console.log(`Cost Time: ${sortName}  ${costTime} seconds`)
}

function isSorted<T>(arr:T[],sort?:sort<T>):boolean{
    let flag = true
    const length = arr.length;
    for(let i =1;i<length;i++){
        let compareResult = sort ? sort(arr[i-1] , arr[i]): (arr[i-1] <= arr[i])
        if(!compareResult){
            flag=false
            break
        }
    }
    return flag

}

export {
    generateRandomArray,
    perfermenceSort,
    isSorted
}
