const LinkedList =require('./LinkedList.js')

class Stack{
    constructor(){
        this.list = new LinkedList("stack")
    }

    push(value){
        this.list.prepend(value)
    }

    pop(){
       return this.list.removeFromFront();
    }

    peek(){
        console.log(this.list.head.value);
    }

    isEmpty(){
        return this.list.isEmpty()
    }

    getSize(){
        return this.list.getSize()
    }

    print(){
        this.list.print()
    }
}

// const stack = new Stack();

// const string = "hello";
// let reversed = "";

// for(let i=0;i<string.length;i++){
//     stack.push(string[i])
// }

// for(let i=0;i<string.length;i++){
//     reversed+=`${stack.pop()}`
// }

// console.log(reversed)



const checkValidParanthesis=(string)=>{
    
    const stack2 = new Stack();

    const brackets={')':'(',']':'[','}':'{'}
    for(let char of string){
        if(['(','{',"["].includes(char)){
            stack2.push(char);
        }else{
            if(stack2.isEmpty() || stack2.pop()!==brackets[char]){
                return false;
            }
        }
    }
    return stack2.getSize()===0
}

const checking=checkValidParanthesis("[{}(){}{[(())]]")
console.log(checking)