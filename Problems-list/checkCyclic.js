const LinkedList = require('../linkedList/List.js')

class Node{
    constructor(value){
        this.next=null;
        this.value=value;
    }

}


const list1 = new LinkedList();
list1.append(10);

const node1 = new Node(20)
const node2 = new Node(40)
const node3 = new Node(50)
const node4 = new Node(60)
const node5 = new Node(70)

list1.head.next = node1
node1.next = node2
node2.next = node3
node3.next = node4
node4.next = node5;
node5.next = node3;


function checkCyclic(){
    let slow = list1.head;
    let fast = list1.head.next;

    while(fast && fast.next){
        if(slow === fast) return true;
        slow = slow.next;
        fast = fast.next.next;
    }

    return false;
}


console.log(checkCyclic())