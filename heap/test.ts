import { generateRandomArray, perfermenceSort } from "../utils/sortTestHelper";
import heapSort1 from "./heapSort1";
import heapSort2 from "./heapSort2";
import heapSort from "./heapSort";

const testArr = generateRandomArray(100000,0,100000);
const copyTestArr = [...testArr]
const copyTestArr2 = [...testArr]

perfermenceSort('heapSort1',heapSort1,testArr)
perfermenceSort('heapSort2',heapSort2,copyTestArr)
perfermenceSort('heapSort',heapSort,copyTestArr2)
