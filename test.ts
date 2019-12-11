import MaxHeap from './maxHeap'

const NUM = 10
const myHeap = new MaxHeap()

for(let i=0;i<NUM;i++){
    const randomNum = Math.floor(Math.random()*100)
    myHeap.insert(randomNum)
}

myHeap.print()
console.log('begin extract')
let maxVal = myHeap.extractMax()
console.log('maxVal',maxVal)
myHeap.print()

