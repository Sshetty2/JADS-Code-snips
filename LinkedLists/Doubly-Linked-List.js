var Node = class{
    constructor(val){
        this.val = val;
        this.next = null;
        this.prev = null;
    }
}

var DoublyLinkedList = class{
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    } 
    push(val){
        let node = new Node(val)
        if (!this.head) {this.head= node, this.tail = node}
        else {
        this.tail.next = node;
        node.prev = this.tail;
        this.tail = node;
        }
        this.length++
        return this;
    }   
    pop(){
        if (!this.head) return undefined;
        let poppedNode = this.tail
        if (this.length === 1) {this.head= null; this.tail = null}
        else{
            this.tail = this.tail.prev
            this.tail.next = null
            poppedNode.prev = null
        } 
        this.length--;
        return poppedNode;
    }   
	shift(){
		if(!this.length) return undefined;
		let oldHead = this.head;
		if(this.length === 1) {this.head = null, this.tail = null}
		else {
			this.head = this.head.next;
			this.head.prev = null;
			oldHead.next = null;
		}
		this.length--;
		return oldHead
	}
	unshift(val) {
		let newNode= new Node(val);
		if(!this.length) {this.head = newNode, this.tail = newNode}
		else { 
			this.head.prev = newNode;
			newNode.next = this.head;
			this.head = newNode;
		}
		this.length++;
		return this
	}
	get(idx){
		let current;
		if(idx < 0 || idx >= this.length) return null;
		if (idx <= Math.ceil(this.length/2)) {
			current = this.head;
			for (var i = 0; i < idx; i++) {
				current = current.next
			}
		} else {
			current = this.tail;
			for (var i = this.length-1; i > idx; i--) {
				current = current.prev
			}
		}
		return current
	}
	set(idx, val) {
		let marker = this.get(idx);
		return !marker ? false : (marker.val = val, true)
	}
	insert(idx, val) {
		let preTarget = this.get(idx-1)
		, postTarget = this.get(idx+1)
		, newNode = new Node(val);
		return !this.length ? false 
		: idx === 0 ? !!this.unshift(val) 
		: idx === this.length ? !!this.push(val) 
		: (preTarget.next = newNode
		, newNode.prev = preTarget
		, newNode.next = postTarget
		, postTarget.prev = newNode
		, this.length++
		, true);
	}		
	remove(idx) {
		let removedNode = this.get(idx)
		return idx < 0 || idx > this.length ? undefined 
		: idx === 0 ? this.shift()
		: idx === this.length-1 ? this.pop()
		: (removedNode.next.prev = removedNode.prev
		, removedNode.prev.next = removedNode.next
		, removedNode.next = null
		, removedNode.prev = null
		, this.length--
		, removedNode);
	}
}



var list = new DoublyLinkedList()
list.push("HELLO") 
list.push("GOODBYE") 
list.push("!")
list.push('idx 3')
list.push('idx 4')
list.push('idx 5')
list.push('idx 6')
list.push('idx 7')

list.insert(0,'hello?')
