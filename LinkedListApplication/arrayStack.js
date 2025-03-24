class ArrayStack{
    constructor(){
        this.array=[];
    }

    push(value){
        this.array.push(value)
    }

    pop(){
        this.array.pop();
    }

    print(){
        console.log(this.array)
    }

    isEmpty(){
        return this.array.length===0
    }

    getSize(){
        return this.array.length;
    }
}

const stack = new ArrayStack();
stack.push(10);
stack.push(20);
stack.push(30);
stack.push(40);
stack.pop()
stack.pop()

stack.print()




