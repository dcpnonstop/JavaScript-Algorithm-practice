 function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
}

// function reConstructBinaryTree(ps,vin)
// {
//    if(ps.length === 0 || vin.length === 0){
//         return null;
//     }
//     var root=ps[ps.length-1];
//     var tree=new TreeNode(root);
//     var index=vin.indexOf(root);
//     // 对于中序遍历,根结点左边的即为左子树,根结点右边的节点即为右子树
//     tree.left=repConstructBinaryTree(ps.slice(0,index),vin.slice(0,index))
//     tree.right=repConstructBinaryTree(ps.slice(index+1,ps.length-1),vin.slice(index+1))
//     return tree;
// }
function reConstructBinaryTree(pre, vin)
{
    if(!pre || vin.length === 0){
        return null;
    }
    //创建根节点，根节点是前序遍历的第一个数
    var root = pre[pre.length-1];
    var tree = new TreeNode(root);
    //找到中序遍历根节点所在位置
    var index = vin.indexOf(root);
    //对于中序遍历，根节点左边的节点即左子树，根节点右边的节点即右子树
    tree.left=reConstructBinaryTree(pre.slice(0,index),vin.slice(0,index))
    tree.right=reConstructBinaryTree(pre.slice(index,pre.length-1),vin.slice(index+1))
    // tree.left = reConstructBinaryTree(pre.slice(1,index+1),vin.slice(0,index));
    // tree.right = reConstructBinaryTree(pre.slice(index+1),vin.slice(index+1));
    return tree;
}
vin='dbeacf'
pre='debfca'
console.log(pre.length);

p=reConstructBinaryTree(pre,vin)
console.log(p);


console.log([0,1,2,3,4,5].slice(0,4));