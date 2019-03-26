var Node = class {
    constructor(val){
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

var DFS = (root_Node) =>{
    let visited = []
    function traverse(curr_node) {
        visited.push(curr_node);
        if (curr_node.right) traverse(curr_node.right);
        if (curr_node.left) traverse(curr_node.left);
    }
    traverse(root_Node)
    return visited
}

root_Node = new Node(10)
root_Node.right = new Node(2)
root_Node.left = new Node(6)
root_Node.right.right = new Node(7)
root_Node.left.left = new Node(8)
root_Node.right.left = new Node(11)
root_Node.left.right = new Node(1)

DFS(root_Node)