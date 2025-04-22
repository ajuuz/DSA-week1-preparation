const LinkedList = require('../linkedList/List.js')


const linkedList1 = new LinkedList()
const linkedList2 = new LinkedList()

//list 1
linkedList1.append(20)
linkedList1.append(70)
linkedList1.append(80)

//list 2
linkedList2.append(10)
linkedList2.append(50)
linkedList2.append(100)


linkedList1.print()
linkedList2.print()

function merge(list1,list2){

    if(!list1) return list2;
    
    if(!list2) return list1;

    if(list1.value<list2.value){
        list1.next = merge(list1.next,list2);
        return list1;
    }else{
        list2.next = merge(list1,list2.next);
        return list2;
    }
}

const head=merge(linkedList1.head,linkedList2.head)

let curr = head;
let values='';

while(curr){
    values+=`${curr.value} `
    curr=curr.next;
}

console.log(values)