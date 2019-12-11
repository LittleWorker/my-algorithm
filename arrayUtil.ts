function swapArrayValue(arr:number[],i:number,j:number){
    const length = arr.length;
    [arr[i],arr[j]] = [arr[j],arr[i]];
}

export {
    swapArrayValue
}
