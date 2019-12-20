import QuickFind from "./QuickFind"
import QuickUnion from "./QuickUnion"

const N = 100000

let quickUnion = new QuickUnion(N)
console.log('===== Begin Perfermence =====')
const startTime2 = new Date().getTime()
// union
for (let i = 0; i < N; i++) {
    // 随机化两个位置进行union操作
    let indexA = Math.floor(Math.random() * N - 1)
    let indexB = Math.floor(Math.random() * N - 1)
    quickUnion.union(indexA, indexB)
}
console.log('===== End Perfermence =====')
const endTime2 = new Date().getTime()
const costTime2 = ((endTime2 - startTime2) / 1000).toFixed(3)
console.log(`Union Cost Time: ${costTime2} seconds`)

console.log('===== Begin Perfermence =====')
const startTime3 = new Date().getTime()
// union
for (let i = 0; i < N; i++) {
    // 随机化两个位置进行union操作
    let indexA = Math.floor(Math.random() * N - 1)
    let indexB = Math.floor(Math.random() * N - 1)
    quickUnion.unionSz(indexA, indexB)
}
console.log('===== End Perfermence =====')
const endTime3 = new Date().getTime()
const costTime3 = ((endTime3 - startTime3) / 1000).toFixed(3)
console.log(`UnionSz Cost Time: ${costTime3} seconds`)

console.log('===== Begin Perfermence =====')
const startTime4 = new Date().getTime()
// union
for (let i = 0; i < N; i++) {
    // 随机化两个位置进行union操作
    let indexA = Math.floor(Math.random() * N - 1)
    let indexB = Math.floor(Math.random() * N - 1)
    quickUnion.unionRank(indexA, indexB)
}
console.log('===== End Perfermence =====')
const endTime4 = new Date().getTime()
const costTime4 = ((endTime4 - startTime4) / 1000).toFixed(3)
console.log(`unionRank Cost Time: ${costTime4} seconds`)
