class Node{
    constructor(value){
        this.value=value;
        this.next=null;
    }
}


class LinkedList{
    constructor(name){
        this.head=null;
        this.tail=null;
        this.size=0;
        this.name=name;
    }
    prepend(value){
        const node=new Node(value);
        if(this.isEmpty()){
            this.tail=node;
        }else{
            node.next=this.head;
        }
        this.head=node;
        this.size++;
    }

    append(value){
        const node = new Node(value);
        if(this.isEmpty()){
            this.head=node;
        }else{
            this.tail.next=node;
        }
        this.tail=node
        this.size++;
    }

    removeFromFront(){
        if(this.isEmpty()) return console.log(`${this.name} is empty`);
        else{
            const value = this.head.value
            if(this.head===this.tail){
                this.tail=null;
                this.head=null;
            }else{
                this.head=this.head.next;
            }
            this.size--;
            return value;            
        }
    }

    removeFromEnd(){
        if(this.isEmpty()) return console.log(`${this.name} is empty`);
            
        if(this.head===this.tail){
                this.head=null;
                this.tail=null;
        }
        else{
            let prev=this.head;
            while(prev.next.next){
                prev=prev.next;
            }
            prev.next=null;
        }
            this.size--;
    }


    print(){
        if(this.isEmpty()) return console.log(`${this.name} is empty`);
        else{
            let curr=this.head;
            let listValues=""
            while(curr){
                listValues+=`${curr.value} `
                curr=curr.next
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


const list = new LinkedList();
list.append(10)
list.append(20)
list.append(30)
list.append(40)
list.append(50)
console.log(list)