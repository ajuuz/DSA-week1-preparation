class Node{
    constructor(value){
        this.value=value;
        this.next=null;
    }
}


class LinkedList{
    constructor(){
        this.head=null;
        this.size=0
    }

    print(){
        if(this.isEmpty()) return console.log("list is empty");
        else{
            let curr=this.head;
            let listValues="";
            while(curr){
                listValues+=`${curr.value} `
                curr=curr.next;
            }
            console.log(listValues)
        }
    }

    prepend(value){
        const node = new Node(value)
        if(!this.isEmpty()) node.next=this.head;
        this.head=node;
        this.size++;
    }

    append(value){
        const node=new Node(value)
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

    insert(value,index){
        if(index<0 || index>this.size) return console.log("out of boundary");

        if(index===0)
        {
            this.prepend(value);
        }else{
            const node=new Node(value);
            let prev=this.head;
            for(let i=0;i<index-1;i++)
            {
                prev=prev.next;
            }
            const nextNode=prev.next;
            prev.next=node;
            node.next=nextNode;
            this.size++;
        }
    }

    removeByIndex(index){
        if(index<0 || index>this.size) return console.log("out of boundary");

        if(this.isEmpty()) return -1

        if(index===0){
            const curr=this.head;
            this.head=curr.next;
        }
        else{
            let prev=this.head
            for(let i=0;i<index-1;i++)
            {
                prev=prev.next;
            }
            const removedNode=prev.next;
            prev.next=removedNode.next;
            removedNode.next=null;
        }
        this.size--;
    }

    removeByValue(value){
        if(this.isEmpty()) return console.log("list is empty");

        if(this.head.value===value)
        {
            this.head=this.head.next;
            this.size--;
        }
        else{
            let prev=this.head;
            while(prev.next && prev.next.value!==value)
            {
                prev=prev.next;
            }
            
            if(prev.next)
            {
                let removedNode = prev.next;
                prev.next=removedNode.next;
                removedNode.next=null;
                this.size--;
            }
            else{
                return console.log("no value found")
            }
        }
        this.size--;
    }

    search(value){
        if(this.isEmpty()) return console.log("list is empty");
        let curr=this.head
        for(let i=0;i<this.size;i++)
        {
            if(curr.value===value) return console.log(i);
            
            curr=curr.next;
        }
        return console.log("no value found")
    }

    reverse(){
        if(this.isEmpty()) return console.log("list is empty");

        let prev=null;
        let curr=this.head;
        while(curr){
            let next = curr.next;
            curr.next = prev;
            prev=curr;
            curr=next;
        }
        this.head=prev;

    }

    fromArray(arr)
    {
        if(arr.length===0) return;
        this.head = new Node(arr[0])
        let curr = this.head;
        this.size=1
        for(let i=1;i<arr.length;i++)
        {
            curr.next=new Node(arr[i]);
            curr=curr.next;
            this.size++;
        }
    }

    removeDuplicates(){
        let current = this.head;
        while(current && current.next)
        {
            if(current.value===current.next.value)
            {
                current.next=current.next.next;
            }else{
                current=current.next;
            }
        }
    }


    isEmpty(){
        return this.size===0;
    }

    getSize(){
        return this.size;
    }
}

const list = new LinkedList();
list.fromArray([1,2,3,4,5,6,7])
list.removeByValue(7)
list.print()