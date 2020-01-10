import { isSorted } from "../../utils/sortTestHelper"
import selectSort from "../selectSort"
import insertSort from "../insertSort"

const unSortArr = [9,3,6,8,1,0,2,4,5,7]
const sortedArr = [0,1,2,3,4,5,6,7,8,9]

// 测试isSorted方法
test('check isSorted',()=>{
    expect(isSorted(unSortArr)).toBe(false)
    expect(isSorted(sortedArr)).toBe(true)
})

// 测试 selectSort
test('select sort',()=>{
    // 会在原数组上直接排序，因此需要拷贝
    let copyUnsortArr = [...unSortArr]
    expect(selectSort(copyUnsortArr)).toStrictEqual(sortedArr)
})

// 测试 insertSort
test('insert sort',()=>{
    // 会在原数组上直接排序，因此需要拷贝
    let copyUnsortArr = [...unSortArr]
    expect(insertSort(copyUnsortArr)).toStrictEqual(sortedArr)
})
