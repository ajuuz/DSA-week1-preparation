// const fibonocci=(value)=>{

//     const arr=[0,1];
//     for(let i=2;i<=value;i++)
//     {
//         arr.push(arr[i-1]+arr[i-2])
//     }
//     console.log(arr)
// }

// fibonocci(7)

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


const recursiveFibonocci=(n)=>{

    if(n<2) return n;
    return recursiveFibonocci(n-1) + recursiveFibonocci(n-2)
}

console.log(recursiveFibonocci(6))