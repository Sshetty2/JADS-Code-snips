Node = class{
    constructor(val){
        this.val = val;
        this.next = null;
    }
}

SinglyLinkedList = class{
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    push(val){
        var newNode = new Node(val);
        if(!this.head){
            this.head = newNode;
            this.tail = this.head;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }
    pop(){
        if(!this.head) return undefined;
        var current = this.head;
        var newTail = current;
        while(current.next){
            newTail = current;
            current = current.next;
        }
        this.tail = newTail;
        this.tail.next = null;
        this.length--;
        if(this.length === 0){
            this.head = null;
            this.tail = null;
        }
        return current;
    }
    shift(){
        if(!this.head) return undefined;
        var currentHead = this.head;
        this.head = currentHead.next;
        this.length--;
        if(this.length === 0){
            this.tail = null;
        }
        return currentHead;
    }
	unshift(val){
		let newNode = new Node(val)
		!this.head ? 
		(this.head = newNode, this.head = newNode) :
		(newNode.next = this.head, this.head = newNode)
		this.length++
		return this
	}
	get(idx){
		let current = this.head;
		if (idx < 0 || idx >= this.length) return null;
		for (let i = 0; i < idx; i ++) {
			current = current.next
		};
		return current
	}
	
	set(idx, val) {
		return !this.get(idx) ?  false : this.get(idx).val = val  
	}
	
	insert(idx, val){
		var newNode = new Node(val);
		return (idx < 0 || idx > this.length) ? false 
		: idx === this.length ? !!this.push(val) 
		: idx === 0 ? !!this.unshift(val)
		: ([this.get(idx-1).next, newNode.next] = [newNode, this.get(idx-1).next]
		, this.length++
		, true)
	}
	
	remove(index){
	if(index < 0 || index >= this.length) return undefined;
	if(index === 0) return this.shift();
	if(index === this.length - 1) return this.pop();
	var previousNode = this.get(index - 1);
	var removed = previousNode.next;
	previousNode.next = removed.next;
	this.length--;
	return removed;
	}
	reverse() {
		var node = this.head;
		this.head = this.tail;
		this.tail = node;
		var prev = null;
		var next;
		
		for(var i = 0; i < this.length; i++){
			next = node.next;
			node.next = prev;
			prev = node;
			node = next
		}
		return this
	}
	
}


var list = new SinglyLinkedList()
list.push("HELLO") 
list.push("GOODBYE") 
list.push("!")
