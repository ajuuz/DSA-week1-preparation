const binarySearch=(arr,target)=>{
    let leftIndex=0;
    let rightIndex=arr.length-1;

    while(leftIndex<=rightIndex){
        let middleIndex = Math.floor((leftIndex+rightIndex)/2)
        if(target===arr[middleIndex]) return middleIndex;
        else if(target>arr[middleIndex]) leftIndex=middleIndex+1;
        else rightIndex=middleIndex-1
    }
    return -1
}


console.log(binarySearch([10,20,30,40,50],20))

const binarySearchRecursive=(arr,target,leftIndex,rightIndex)=>{
    if(leftIndex>rightIndex) return -1;

    let middleIndex = Math.floor((leftIndex+rightIndex)/2);
    if(target===arr[middleIndex]) {
        return middleIndex;
    }
    else if(target>arr[middleIndex]){
     return binarySearchRecursive(arr,target,middleIndex+1,rightIndex);
    }
    else{
     return binarySearchRecursive(arr,target,leftIndex,middleIndex-1);
    }
}

console.log(binarySearchRecursive([10,20,30,40,50],40,0,[10,20,30,40,50].length-1))