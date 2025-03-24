class Stack{
    constructor(){
        this.object={};
        this.front=0;
        this.back=0;
    }

    push(value){
        this.back++;
        this.object[this.back]=value;
    }

    pop(){
        if(Object.values(this.object).length===0) return console.log("empty")
        const value = this.object[this.back];
        delete this.object[this.back];
        this.back--;
        return value
    }

    

    print(){
        let stackValues="";
        for(let i in this.object){
            stackValues+=`${this.object[i]} `
        }
        console.log(stackValues)
    }
}


const stack=new Stack();
stack.push(10)
stack.push(20)
stack.push(30)
stack.push(40)
stack.pop()
stack.pop()
stack.push(100)
stack.print()