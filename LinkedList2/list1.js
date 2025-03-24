class Node{
    constructor(value){
        this.value=value;
        this.next=null;
    }
}


class LinkedList{
    constructor(){
        this.head=null;
        this.size=0;
    }


    prepend(value){
        const node = new Node(value);
        if(!this.isEmpty()) {
            node.next=this.head;
        }
        this.head = node;
        this.size++;
    }

    append(value){
        const node = new Node(value);
        if(this.isEmpty()){
            this.head=node;
        }else{
            let prev=this.head;
            while(prev.next){
                prev=prev.next;
            }
            prev.next=node;
        }
        this.size++;
    }

    insert(index,value){
        if(index<0 || index>this.getSize()) return console.log("invalid index");
        
        if(index===0){
            this.prepend(value)
        }
        else{
            const node = new Node(value)
            let prev=this.head;
            for(let i=0;i<index-1;i++){
                prev=prev.next;
            }
            const nextNode = prev.next;
            prev.next=node;
            node.next=nextNode;
            this.size++;
        }
    }

    remove(index){
        if(this.isEmpty()) return console.log("list is empty");
        
        if(index===0){
            this.head=this.head.next
        }
        else{
            let prev=this.head;
            for(let i=0;i<index-1;i++){
                prev=prev.next;
            }
            const curr=prev.next;
            prev.next=curr.next;
            curr.next=null;
        }
        this.size--;
    }

    removeByVal(value){
        if(this.isEmpty()) return console.log("list is empty");

        if(this.head.value===value)
        {
            this.head=this.head.next;
        }else{
            let prev=this.head;
            while(prev.next && prev.next.value!=value){
                prev=prev.next;
            }
            if(prev.next){
                const curr=prev.next;
                prev.next=curr.next;
                curr.next=null
                this.size--;
            }else{
                console.log("no element present")
            }
        }
    }

    search(value){
        if(this.isEmpty()) return console.log("list is empty");
        else{
            let curr=this.head;
           for(let i=0;i<this.size;i++){
            if(curr.value===value) return i;
            else curr=curr.next;
           }
           return -1
        }
    }

  reverse(){
    if(this.isEmpty()) return console.log("list is empty");

    let prev=null;
    let curr=this.head;
    while(curr){
        let next = curr.next;
        curr.next=prev;
        prev=curr;
        curr=next;
    }
    this.head=prev;
  }

    print(){
        if(this.isEmpty()) return console.log("list is empty");
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
console.log(list.isEmpty())

list.append(100)
list.append(200)
list.append(300)
list.append(400)
list.append(500)
console.log(list)
