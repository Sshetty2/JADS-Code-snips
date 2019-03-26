var Node = class {
    constructor(val){
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

var BFS = (root_Node) =>{
    let newQueue = [root_Node]
    let visitedNodes = []
    while (newQueue.length) {
        let current_Node = newQueue.shift()
        if (current_Node.right){
            newQueue.push(current_Node.right)
        }
        if (current_Node.left){
            newQueue.push(current_Node.left)
        }
        visitedNodes.push(current_Node)
    }
    return visitedNodes
}


root_Node = new Node(10)
root_Node.right = new Node(2)
root_Node.left = new Node(6)
root_Node.right.right = new Node(7)
root_Node.left.left = new Node(8)
root_Node.right.left = new Node(11)
root_Node.left.right = new Node(1)

BFS(root_Node)