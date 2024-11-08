function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val);
    this.left = (left === undefined ? null : left);
    this.right = (right === undefined ? null : right);
}

// 前序：中左右
function preorderTrav(root) {
    let ans = [];

    function inorder(node, list) {
        if (!node) return;

        list.push(node.val);
        inorder(node.left, list);
        inorder(node.right, list);
    }

    inorder(root, ans);

    return ans;
}

// 中序：左中右
function inorderTrav(root) {
    let ans = [];

    function inorder(node, list) {
        if (!node) return;

        inorder(node.left, list);
        list.push(node.val);
        inorder(node.right, list);
    }

    inorder(root, ans);

    return ans;
}

//后序：左右中
function postorderTrav(root) {
    let ans = [];

    function inorder(node, list) {
        if (!node) return;

        inorder(node.left, list);
        inorder(node.right, list);
        list.push(node.val);
    }

    inorder(root, ans);

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

console.log(inorderTrav(root));
console.log(preorderTrav(root));
console.log(postorderTrav(root));
