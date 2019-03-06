// my broken implementation

var Node = class {
    constructor(val){
        this.val = val;
        this.left = null;
        this.right = null;
    }

}

var BST = class {
    constructor() {
        this.root = null;
    }
    insert(val){
        let newNode = new Node(val);
        let current = this.root
        if (!this.root) {this.root = newNode}
		if(value === current.value) return undefined;
        else if (newNode.val > this.root.val) {
            if(!this.root.right){this.root.right = newNode}
            else {
                while(current.right) {
                    current = current.right
                }
                current.right = newNode 
            }
        } else {
            if (!this.root.left) {this.root.left = newNode}
            else {
                while(current.left) {
                    current = current.left
                }
                current.left = newNode
            }
          }
          return this
     }
}

var tree = new BST();
tree.root = new Node(10)
tree.root.right = new Node(15);
tree.root.left = new Node(7);
tree.root.left.right = new Node(9);

tree.insert(1)


// Colts (modified)implementation


var Node = class {
    constructor(val){
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

var BST = class {
    constructor(){
        this.root = null;
    }
    insert(val){
        var newNode = new Node(val);
        if(this.root === null){
            this.root = newNode;
            return this;
        }
        var current = this.root;
        while(true){
            if(val === current.val) return undefined;
            if(val < current.val){
                if(current.left === null){
                    current.left = newNode;
                    return this;
                }
                current = current.left;
            } else {
                if(current.right === null){
                    current.right = newNode;
                    return this;
                } 
                current = current.right;
            }
        }
    }
    search(val){
        let current = this.root
        if(!this.root) return undefined;
        while(current) {
            if (current.val === val) return true
            if (val > current.val) {
                current = current.right
            } else {
                current = current.left
            }    
        }
        return false
     }
}


//      10
//   5     13
// 2  7  11  16

var tree = new BST();
tree.insert(10)
tree.insert(5)
tree.insert(13)
tree.insert(11)
tree.insert(2)
tree.insert(16)
tree.insert(7)

tree.search(18)





