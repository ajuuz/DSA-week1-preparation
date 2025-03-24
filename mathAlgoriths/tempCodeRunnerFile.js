const arr=[0,1];
let i=2;

const fibonocciRecursive=(value)=>{
    if(i===value) return
    arr.push(arr[i-1]+arr[i-2])
    i++;
    fibonocciRecursive(value)
}

fibonocciRecursive(5)
console.log(arr)