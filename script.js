class Node{
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class LinkedList{
    constructor(){
        this.head = null;
    }
}

function append(value, list){
    let pointer = list.head;
    if(list.head == null){
        list.head = new Node(value);
    }else{
        while(pointer.next != null){
            console.log("hi gg",pointer.next, pointer.next != null);
            console.log("i am in");
            pointer = pointer.next;
        }
        pointer.next = new Node(value);
    }
}

function preAppend(value, list){
    if(list.head == null){
        list.head = new Node(value);
    }else{
        const tmp = list.head;
        list.head = new Node(value);
        list.head.next = tmp;
    }
}

function size(list){
    pointer = list.head;
    if(list.head == null){
        return 0;
    }else{
        let counter = 0;
        while(pointer != null ){
            counter ++;
            pointer = pointer.next;
        }
        return counter;
    }
}

let list = new LinkedList();

append(2, list);
console.log("it not false now")
append(3, list);
console.log(list);

console.log("you should be in by now");
append(4, list);

preAppend(1, list),

console.log(list);
console.log("the size of it is", size(list));