class ListNode{
    constructor(value){
        this.next = null;
        this.value=value;
    }
}

const common = new ListNode(5)
common.next = new ListNode(6)
common.next.next = new ListNode(7)


const listt1 = new ListNode(1)
listt1.next = new ListNode(2)
listt1.next.next = new ListNode(3)
listt1.next.next.next = new ListNode(4)
listt1.next.next.next.next = common;


const listt2= new ListNode(10)
listt2.next = new ListNode(12)
listt2.next.next = new ListNode(13)
listt2.next.next.next = common;



function interSectionFinder(){
    if(!listt1 || !listt2) return null;

    let p1 = listt1;
    let p2 = listt2;

    while(p1!==p2){
        p1 = p1?p1.next : listt2;
        p2 = p2?p2.next : listt1;
    }

    console.log(p1.value)
}

interSectionFinder()
