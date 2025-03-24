// let fact=1;
// const factorial=(value)=>{
//     for(let i=value;i>=1;i--)
//     {
//         fact*=i;
//     }
// }

// factorial(3)
// console.log(fact)


const factorialRecursive=(value)=>{
    if(value===1) return 1;
    return value*factorialRecursive(value-1)
}

console.log(factorialRecursive(5))