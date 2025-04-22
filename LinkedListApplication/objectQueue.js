//Queue using Object

class Queue{
    constructor(){
        this.object={};
        this.front=1;
        this.back=0;
    }

    enqueue(value){
        this.back++;
        this.object[this.back]=value;
    }

    dequeue(){
        if(Object.values(this.object).length===0) return console.log("empty")
        const value = this.object[this.front];
        delete this.object[this.front];
        this.front++;
        return value
    }

    

    print(){
        let QueueValues="";
        for(let i in this.object){
            QueueValues+=`${this.object[i]} `
        }
        console.log(QueueValues)
    }
}


const queue=new Queue();
queue.enqueue(10)
queue.enqueue(20)
queue.enqueue(30)
queue.enqueue(40)
queue.enqueue(100)
queue.dequeue()
queue.print()