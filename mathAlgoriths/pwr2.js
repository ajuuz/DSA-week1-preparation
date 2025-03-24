const pwr2=(value)=>{
    if(value<0) return false;

    while(value>1)
    {
        if(value%2!==0) return false;

        value=value/2
    }
    return true
}

console.log(pwr2(8))