const arr=[1, 2, 3, 2, 4, 2,4];

const firstLastOccurence=(target)=>{
    let firstOccurence=null;
    let lastOccurence=null;

    for(let i=0;i<arr.length;i++){
        if(arr[i]===target){
            if(!firstOccurence){
                firstOccurence=i;
            }
            lastOccurence=i;
        }
    }

    return {firstOccurence,lastOccurence}
}


console.log(firstLastOccurence(3))