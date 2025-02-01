class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }
}

function append(value, list) {
    let pointer = list.head;
    if (list.head == null) {
        list.head = new Node(value);
    } else {
        while (pointer.next != null) {
            console.log("hi gg", pointer.next, pointer.next != null);
            console.log("i am in");
            pointer = pointer.next;
        }
        pointer.next = new Node(value);
    }
}

function preAppend(value, list) {
    if (list.head == null) {
        list.head = new Node(value);
    } else {
        const tmp = list.head;
        list.head = new Node(value);
        list.head.next = tmp;
    }
}

function size(list) {
    pointer = list.head;
    if (list.head == null) {
        return 0;
    } else {
        let counter = 0;
        while (pointer != null) {
            counter++;
            pointer = pointer.next;
        }
        return counter;
    }
}

function head(list) {
    return list.head.value;
}

function tail(list) {
    let pointer = list.head;
    if (list.head == null) {
        return list.haed;
    } else {
        while (pointer.next != null) {
            pointer = pointer.next;
        }
        return pointer.value;
    }
}

function at(index, list) {
    let pointer = list.head;
    let counter = 1;
    if (index > size(list)) {
        return "your list doesn't reach that";
    } else if (list.head == null) {
        return "your list is empty";
    } else {
        while (pointer.next != null && counter < index) {
            pointer = pointer.next;
            counter++;
        }
        return pointer.value;
    }
}

function pop(list) {
    let pointer = list.head;
    if (list.head == null) {
        return "your list is empty dude";
    } else if (pointer.next == null) {
        list.head = null;
        return;
    } else {
        while (pointer.next.next != null) {
            pointer = pointer.next;
        }
        pointer.next = null;
    }
}

function contains(list, value) {
    let pointer = list.head;
    if (list.head == null) {
        return false;
    } else {
        while (pointer != null) {
            if (pointer.value == value) {
                return true;
            }
            pointer = pointer.next;
        }
        return false;
    }
}

function find(list, value) {
    let pointer = list.head;
    let counter = 0;
    if (list.head == null) {
        return -1;
    } else {
        while (pointer != null) {
            if (pointer.value == value) {
                return counter;
            }
            pointer = pointer.next;
            counter++;
        }
        return -1;
    }
}

function totring(list) {
    let pointer = list.head;
    let result = "";
    if (list.head == null) {
        return "the lis is empty";
    } else {
        while (pointer != null) {
            result += ` (${pointer.value})-->`
            pointer = pointer.next;
        }
        result = result + ` null`;
        return result;
    }
}

let list = new LinkedList();

append(2, list);
append(3, list);
append(4, list);

preAppend(1, list), console.log(list);
console.log("the size of it is", size(list));
console.log("the head ", head(list));
console.log("the tail ", tail(list));
console.log(`there is ${at(2, list)} in 2`);
pop(list);
console.log("poping ", list.head.next.next);
console.log(contains(list, 5));
console.log(find(list, 4));
console.log(totring(list));
