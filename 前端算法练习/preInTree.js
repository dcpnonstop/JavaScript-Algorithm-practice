 
// 由二叉树的先序和中序重构一棵二叉树

 function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
} 
function reConstructBinaryTree(pre, vin)
{
    if(pre.length === 0 || vin.length === 0){
        return null;
    }
    //创建根节点，根节点是前序遍历的第一个数
    var root = pre[0];
    var tree = new TreeNode(root);
    //找到中序遍历根节点所在位置
    var index = vin.indexOf(root);
    //对于中序遍历，根节点左边的节点即左子树，根节点右边的节点即右子树
    tree.left = reConstructBinaryTree(pre.slice(1,index+1),vin.slice(0,index));
    tree.right = reConstructBinaryTree(pre.slice(index+1),vin.slice(index+1));
    return tree;
}

// 由二叉树中序和后序重构二叉树
// function repConstructBinaryTree(pos,vin){
//    if(pos.length === 0 || vin.length === 0){
//         return null;
//     }
//     var root=pos[pos.length-1];
//     var tree=new TreeNode(root);
//     var index=vin.indexOf(root);
//     // 对于中序遍历,根结点左边的即为左子树,根结点右边的节点即为右子树
//     tree.left=repConstructBinaryTree(pos.slice(0,index),vin.slice(0,index))
//     tree.right=repConstructBinaryTree(pos.slice(index+1,pos.length-1),vin.slice(index+1))
//     return tree;
// }

pre='abdecf'
vin='dbeacf'
pos='debfca'
t=reConstructBinaryTree(pre,vin)
console.log(t);

// p=repConstructBinaryTree(pos.vin)
// console.log(p);


function minNumberInRotateArray(rotateArray)
{
    // write code here
    var t=[]
    if(rotateArray.length===0){
        return 0;
    }else{
        for(var i=0;i<rotateArray.length;i++){
            if(rotateArray[i+1]<rotateArray[i]){
                t=rotateArray.slice(i+1,rotateArray.length).concat(rotateArray.slice(0,i))
            }
        }
    }
    return t[0];
}