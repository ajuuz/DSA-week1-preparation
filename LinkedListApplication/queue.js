const LinkedList = require("./LinkedList");

class Queue{
    constructor(){
        this.list = new LinkedList("queue");
    }

    enqueue(value){
        this.list.append(value)
    }

    dequeue(){
        this.list.removeFromFront();
    }

    peek(){
        console.log(this.list.head.value);
    }

    print(){
        this.list.print()
    }
}

const queue = new Queue();
queue.enqueue(10)
queue.enqueue(20)
queue.enqueue(30)
queue.enqueue(40)
queue.dequeue()
queue.peek()
queue.print()