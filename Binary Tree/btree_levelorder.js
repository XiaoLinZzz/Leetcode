function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val);
    this.left = (left === undefined ? null : left);
    this.right = (right === undefined ? null : right);
}

function levelorder(root) {
    let ans = [];
    let queue = [];

    if (!root) return;
    queue.push(root);

    while(queue.length > 0) {
        let level = [];
        let size = queue.length;

        for (let i = 0; i < size; i++) {
            let node = queue.shift();
            level.push(node.val);

            if (node.left) {
                queue.push(node.left);
            }

            if (node.right) {
                queue.push(node.right);
            }
        }

        ans.push(level);
    }

    return ans;
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


console.log(levelorder(root));