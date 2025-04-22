const checkPalindrome=(string)=>{

    let left=0;
    let right=string.length-1;

    return checkerFunction(string,left,right);
}

const checkerFunction=(string,left,right)=>{
    if(left>right) return true;

    if(string[left]!==string[right]) return false;
    return checkerFunction(string,left+1,right-1);
}


const string='malayplam'

console.log(checkPalindrome(string))