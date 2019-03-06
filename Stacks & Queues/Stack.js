  var Stack = class {
      constructor(){
          this.first = null;
          this.last = null;
          this.size = 0; 
      }
      push(val) {
          let newNode = new Node(val)
          return !this.size ? (this.first = newNode, this.last = newNode)
          : [this.first, newNode.next] = [newNode, this.first]
          , this.size++
          , this;
      }
      pop(){
          let poppedItem = this.first
          return !this.size ? null
          : this.size === 1 ? (this.first = null, this.last = null, this.size--, poppedItem.val) 
          : (this.first = this.first.next, this.size--, poppedItem.val)
      }
  }

  var Node = class {
      constructor(val){
          this.val = val;
          this.next = null;
      }
  }


newStack = new Stack()
newStack.push('firstNode')
newStack.push('secondNode')
newStack.push('thirdNode')

newStack.pop()



