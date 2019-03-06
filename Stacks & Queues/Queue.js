  var Queue = class {
      constructor(){
          this.first = null;
          this.last = null;
          this.size = 0; 
      }
      enqueue(val) {
          let newNode = new Node(val)
          return !this.size ? (this.first = newNode, this.last = newNode, this.size ++, this)
          : (this.last.next = newNode, this.last = newNode
          , this.size++
          , this)
      }
      dequeue(){
          let shiftedItem = this.first
          return !this.size ? null
          : this.size === 1 ? (this.first = null, this.last = null, this.size--, shiftedItem.val) 
          : (this.first = this.first.next, this.size--, shiftedItem.val)
      }
  }

  var Node = class {
      constructor(val){
          this.val = val;
          this.next = null;
      }
  }


newQueue = new Queue()
newQueue.enqueue('firstNode')
newQueue.enqueue('secondNode')
newQueue.enqueue('thirdNode')





