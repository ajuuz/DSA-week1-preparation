const arr=[1, 2, 3,3, 2, 4, 2];
const countOccurence=(target)=>{
    let count=0;
    
    for(let element of arr){
        if(element===target) count++;
    }

    return count;
}

console.log(countOccurence(3))