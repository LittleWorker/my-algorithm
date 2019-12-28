/**
 * 最大堆辅助函数库
 * 以索引为0开始存储的堆
 */

 /**
  * 获取当前节点的父节点的索引值
  * @param i 当前节点的索引
  */
function getParentIndex(i:number){
    return Math.floor((i-1)/2)
}

 /**
  * 获取当前节点的左子节点的索引值
  * @param i 当前节点的索引
  */
function getLeftChildIndex(i:number){
    return 2*i + 1
}

 /**
  * 获取当前节点的右子节点的索引值
  * @param i 当前节点的索引
  */
function getRightChildIndex(i:number){
    return 2*i + 2
}

export {
    getParentIndex,
    getLeftChildIndex,
    getRightChildIndex
}
