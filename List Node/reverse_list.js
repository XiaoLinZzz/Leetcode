function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val);
    this.next = (next === undefined ? null : next);
}

function reverse_list(root) {
    let prev = null;

    let cur = root;
    while (cur) {
        let tmp = cur.next;
        cur.next = prev;
        prev = cur;
        cur = tmp;
    }

    return prev;
}

let head = new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4))));

function print_list(root) {
    let cur = root;

    while (cur) {
        console.log(cur.val);
        cur = cur.next;
    }
}

print_list(head);
console.log("---")
print_list(reverse_list(head));