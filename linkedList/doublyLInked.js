class Node{
    constructor(value){
        this.prev=null;
        this.value=value;
        this.next=null;
    }
}


class DoublyLinkedList{
    constructor(){
        this.head=null;
        this.tail=null
        this.size=0;
    }

    print(){
        if(this.isEmpty()) return console.log("list is empty")
        else{
            let curr=this.head;
            let listValues=""
            for(let i=0;i<this.size;i++)
            {
                listValues+=`${curr.value} `;
                curr=curr.next;
            }
            console.log(listValues)
        }
    }

    prepend(value){
        const node = new Node(value)
        if(this.isEmpty()){
            this.head=node;
            this.tail=node;            
        }
        else{
            node.next=this.head;
            this.head.prev=node;
            this.head=node;
        }
        this.size++;
    }

    append(value){
        const node = new Node(value);
        if(this.isEmpty()){
            this.head=node;
            this.tail=node;
        }else{
            node.prev=this.tail
            this.tail.next=node;
            this.tail=node;
        }
        this.size++;
    }

    reverse(){
        if(this.isEmpty()) return console.log("list is empty")
        else{
            let curr=this.tail;
            let listValues=""
            while(curr)
            {
                listValues+=`${curr.value} `
                curr=curr.prev
            }
            console.log(listValues)
        }
        
    }

    isEmpty(){
        return this.size===0
    }

    getSize(){
        return this.size;
    }
}

const doublyList = new DoublyLinkedList()
doublyList.prepend(10)
doublyList.prepend(20)
doublyList.prepend(30)
doublyList.append(1999)
doublyList.append(2999)
doublyList.reverse()