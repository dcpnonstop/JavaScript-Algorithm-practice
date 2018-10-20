// 数组求和

// forEach函数
var arr1=[1,2,3,4]
var sum1=0
arr1.forEach(function(e){sum1+=e});
console.log(sum1);


// map实现
var arr2=[1,2,3,4]
var sum2=0;
t=arr2.map(function(obj){sum2+=obj})
console.log(sum2);


// reduce实现
var arr3=[1,2,3,4]
t=arr3.reduce(function(pre,cur){return pre+cur},0)
console.log(t);


// reduce计算数组中每个元素个数




// reduce 对list按照属性分类
var people=[
{name:'alice',age:21},
{name:'bob',age:20},
{name:'ding',age:20}];

function groupBy(arrayName,property){
	return arrayName.reduce(function(acc,obj){
		var key=obj[property];
		if(!acc[key]){
			acc[key]=[]

		}
		acc[key].push(obj);
		return acc;

	},{})
	
}


var groupPeople=groupBy(people,'age')
console.log(groupPeople);

p={name:'alice',age:21}
console.log(!p['age']);
var acc={}
acc[21]=[]
acc[21].push(p)
console.log(acc);


var friends = [{
  name: 'Anna',
  books: ['Bible', 'Harry Potter'],
  age: 21
}, {
  name: 'Bob',
  books: ['War and peace', 'Romeo and Juliet'],
  age: 26
}, {
  name: 'Alice',
  books: ['The Lord of the Rings', 'The Shining'],
  age: 18
}];

var allbooks = friends.reduce(function(accumulator, currentValue) {
  return [...accumulator, ...currentValue.books];
}, []);

console.log(allbooks);

// reduce数组去重
var arr = [1, 2, 1, 2, 3, 5, 4, 5, 3, 4, 4, 4, 4];
var result=arr.sort().reduce(function(a,b){
	var length=a.length;
	if(length===0||a[length-1]!==b){
		a.push(b);

	}
	return a;

},[])

console.log(result);


function ListNode(x){
	this.val=x;
	this.next=null;
}

// 链表顺序合并

function Merge(pHead1,pHead2){
	if(pHead1==null){
		return pHead2;
	}
	if(pHead2==null){
		return pHead1;
	}
	this.head=new ListNode('head');
	var current=this.head;
	if(pHead1.val<pHead2.val){
		current=pHead1;
		current.next=Merge(pHead1.next,pHead2)
	}else{
		current=pHead2;
		current.next=Merge(pHead1,pHead2.next)
	}
	return current;


}

n=[1,2,3,4,6,5]



n.sort()
console.log(n);
for(i in n){
	console.log(n[i]);
}
console.log(n.toString().replace(/\,/g,''));


function PrintMinNumber(numbers){
	var count=0;
	var strLen=0;
	for(var i=0;i<numbers;i++){
		var t=i.toString();
		var strLen=t.length;
		for(var j=0;j<strLen;j++){
			if(t[j] === '1'){
				count++;
			}
		}
		
	}
	
	return count;

}

console.log(PrintMinNumber(1));






// 字符串全排列
function permutate(str) {
 
    var result=[];
    if(str.length==1){
        return [str]    
    }else{
     
            var preResult=permutate(str.slice(1));
            for (var j = 0; j < preResult.length; j++) {
                for (var k = 0; k < preResult[j].length+1; k++) {
                    var temp=preResult[j].slice(0,k)+str[0]+preResult[j].slice(k);              
                    result.push(temp);              
                }
            }
        return result;
 
    }  
}
 


 var t=permutate("aba");
 var result=t.sort().reduce(function(a,b){
	var length=a.length;
	if(length===0||a[length-1]!==b){
		a.push(b);

	}
	return a;

},[])



console.log(t);



console.log(result);