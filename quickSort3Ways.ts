function quickSort3Ways<T>(arr:T[]):T[]{
    __quickSort3Ways(arr,0,arr.length-1)
    return arr
}

function __quickSort3Ways<T>(arr:T[],l:number,r:number){
    if(l>=r){
        return
    }

    let [lt,gt] = __partition3Ways(arr,l,r)
    __quickSort3Ways(arr,l,lt-1)
    __quickSort3Ways(arr,gt,r)
    
}

export function __partition3Ways<T>(arr:T[],l:number,r:number):[number,number]{
    //优化：随机选择一个位置，避免在进行近乎有序数组的排序时，算法复杂度退化到N*N
    let randomIndex = Math.ceil(Math.random() * (r - l)) + l;
    [arr[l], arr[randomIndex]] = [arr[randomIndex], arr[l]]

    // arr[l,lt-1]<v  arr[lt,gt-1]=v  arr[gt,r]>v
    let lt=l,gt=r+1,i=l+1,v=arr[l]
    while(true){
        if(arr[i] < v){
            [arr[i],arr[lt+1]] = [arr[lt+1],arr[i]]
            i++
            lt++
        }else if(arr[i] > v){
            [arr[i],arr[gt-1]] = [arr[gt-1],arr[i]]
            gt--
        } else{
            // 相等
            i++
        }
        if(i>=gt){
            break;
        }
    }

    [arr[lt],arr[l]] = [arr[l],arr[lt]]
    return [lt,gt]
}

export default quickSort3Ways
