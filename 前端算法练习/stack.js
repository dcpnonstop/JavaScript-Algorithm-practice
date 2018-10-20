// STACK====》》LIFO
function Stack(){
	var items=[];
	// 添加元素到栈顶
	this.push=function(element){
		items.push(element);

	}
	// 移除栈顶元素，同时返回栈顶元素
	this.pop=function(){
		return items.pop()
	}
	// 返回栈顶的元素，但不对栈做任何修改
	this.peek=function(){
		return items[items.length-1]
	}
	// 如果栈内没有任何元素就返回true,否则返回false
	this.isEmpty=function(){
		return items.length===0;
	}
	// 返回栈里的元素个数
	this.size=function(){
		return items.length;
	}
	// 移除栈内所有元素
	this.clear=function(){
		items=[];
	}
	this.print = function(){//打印
    console.log(items.toString());
  };

  // 将数组转换成字符串
   this.toString = function(){
    return items.toString();
  };


}

// 利用栈，将10进制的数字转换成2进制的数字
function divideBy2(decNumber){
	var reStack=new Stack();
	var re;
	var binaryString='';
	while(decNumber>0){
		rem=Math.floor(decNumber%2);
		reStack.push(rem);
		decNumber=Math.floor(decNumber/2);
	}
	while(!reStack.isEmpty()){
		// 余数除完反转过来就是2进制数
		binaryString+=reStack.pop().toString();
	}
	return binaryString;
}


console.log(divideBy2(2));

console.log(3%2)
// console.log(Math.floor(3/2));


//利用栈，将10进制转换成任意进制
function baseConverter(decNumber,base){
	var remStack=new Stack();
	var rem;
	baseString='';
	digits='0123456789ABCDEF';
	while(decNumber>0){
		rem=Math.floor(decNumber%base);
		remStack.push(rem);
		decNumber=Math.floor(decNumber/base);

	}
	while(!remStack.isEmpty()){
		baseString+=digits[remStack.pop()]
	}
	return baseString;

}
console.log(baseConverter(99,2));

// 队列==》》FIFO
function Queue(){
	var items=[];
	// 向队列尾部添加一个或者多个元素
	this.enqueue=function(element){
		items.push(element);
	}
	// 移除队列的第一个元素，并返回被移除的元素
	this.dequeue=function(){
		return items.shift();
	}
	//返回队列的第一个元素，队列不做任何改变
	this.front=function(){
		return items[0];
	}
	// 如果队列没有任何元素返回true,否则false
	this.isEmpty=function(){
		return items.lenght==0;
	}
	// 移除队列所有元素
	this.clear=function(){
		items=[];
	}
	// 返回队列元素个数
	this.size=function(){
		return items.lenght;
	}
	this.print=function(){
		console.log(items.toString());
	}
}


function hotPotato(namelist, num){
  var queue = new Queue();
  for(var i = 0; i < namelist.length; i++){
    queue.enqueue(namelist[i]);
  }
  var eliminated = '';
  while(queue.size() > 1){
    for(var i = 0; i < num; i++){
      queue.enqueue(queue.dequeue());
    }
    eliminated = queue.dequeue();
    console.log(eliminated+"在游戏中淘汰了。");
  }
  return queue.dequeue();
}
var names = ["a","b","c","d","e"];
var winner = hotPotato(names,1);
console.log("胜利者"+winner);




var x=99
console.log(x.toString(2));
console.log(parseInt("1100011", 2));

//基数排序的实现
//定义队列数组
var queues=[];
// 定义数字数组
var nums=[];

// 选中十个0~99的随机数进行排序
for(var i=0;i<10;i++){
	queues[i]=new Queue();
	nums[i]=Math.floor(Math.random()*101);
}

// 输出随机产生的数组
console.log('before radix sort:'+nums);

// 创建链表
function CreateLinkNode(data,pre,next){
	this.data=data;
	this.preNode=pre;
	if(this.preNode){
		pre.nextNode=this;
	}
	this.nextNode=next;
}


// 魔法币
function MagicCollec(n){
	var result=[];
	var machine=['1','2'];
	while(n>0){
		if(n%2==0){
			n=(n-2)/2;
			result.unshift(machine[1]);			
		}else{
			n=(n-1)/2;
			result.unshift(machine[0]);

		}
	}
	return result.toString().replace(/\,/g,'');
}

console.log(MagicCollec(999));




bool match(char* str, char* pattern)
{
    if (pattern[0] == 0 && str[0] == 0) {
        return true;
    }
 
    if (pattern[0] != 0 && pattern[1] == '*') {
        if (match(str, pattern + 2)) return true;
    }
 
    if ((pattern[0] == '.' && str[0]) || str[0] == pattern[0]) {
        if (match(str + 1, pattern + 1)) return true;
        if (pattern[1] == '*' && match(str + 1, pattern)) {
            return true;
        }
    }
 
    return false;
}