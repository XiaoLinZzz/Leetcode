function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val);
    this.left = (left === undefined ? null : left);
    this.right = (right === undefined ? null : right);
}


function reverseTree(root) {
    if (!root) return;

    [root.left, root.right] = [root.right, root.left];
    reverseTree(root.left);
    reverseTree(root.right);

    return root;
}

let root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.left.left = new TreeNode(4);
root.left.right = new TreeNode(5);


// 构建的树结构如下：
//      1
//     / \
//    2   3
//   / \
//  4   5
