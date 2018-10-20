// 使用构造函数来创建结点
function Node(element){
	this.element=element;
	this.next=null;
}


// LList提供对链表进行的操作（查找，插入，删除）
// 使用Node对象来保存链表的头节点
function LList(){
	this.head=new Node('head');
	this.find=find;
	this.insert=insert;
	// this.remove=remove;
	this.display=display;
}


// 在指定位置（元素后面）插入元素，先查找到要插入的位置
function find(item){
	//创建一个新结点，并将链表的头节点赋给新创建的结点
	var currNode=this.head; 
	while(currNode.element!=item){
	//在链表上进行循环，如果当前结点的element属性和要找的信息不符合，继续往后面查找
		currNode=currNode.next;
	}
	return currNode;
}

// 找到在指定位置后，就可以将新结点插入链表了
function insert(newElement,item){
	var newNode = new Node(newElement);
	var current = this.find(item);
	newNode.next=current.next;
	current.next=newNode;
}

// 定义display方法来显示链表的元素
function display(){
	var currNode=this.head;
	while(currNode!==null){
		console.log(currNode.next.element);
		currNode=currNode.next;
	}
}


// 主程序
var cities=new LList()
cities.insert('Conn','hed','arm','dwd')
cities.display()





