/**
 * 测试
 */

 import selectSort from './sort/selectSort'
 import insertSort from './sort/insertSort'

import { generateRandomArray,perfermenceSort } from './sort/sortTestHelper'

 class Student {
    constructor(public name:string,public score:number){}
 }

 const studentArr = [new Student('liwei',90),new Student('yaoli',89)]

 function sort(studentA:Student,studentB:Student):boolean{
     return studentA.score < studentB.score
 }

 let result = selectSort(studentArr,sort)
 console.log(result)


 const testArr = generateRandomArray(100000,0,100000);
 const copyTestArr = [...testArr]

 perfermenceSort('selectSort',selectSort,testArr)
 perfermenceSort('insertSort',insertSort,copyTestArr)
