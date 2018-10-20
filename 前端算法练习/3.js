// 判断一个单词是否是回文
var str1 = 'abcdef'
var str2 = 'abcdcba'
function pal(str){
	return str.split('')== str.split('').reverse().join();
}
console.log(pal(str1));
console.log(pal(str2));


// 利用indexOf()进行数组去重
var arr =[2,2,3,3,54,6,6];
var a= Math.max.apply(Math,arr)
console.log(a);
function unique1(arr){
	var arr1 =[];
	for(i=0;i<=arr.length;i++){
		if(arr1.indexOf(arr[i])==-1){
			arr1.push(arr[i]);
		}
	}
	return arr1;

}
console.log(unique1(arr));

// 利用key来进行筛选

let unique2 = function(arr) {  
  let hashTable = {};
  let data = [];
  for(let i=0,l=arr.length;i<l;i++) {
    if(!hashTable[arr[i]]) {
      hashTable[arr[i]] = true;
      data.push(arr[i]);
    }
  }
  return data

}

console.log(unique2(arr));


// 统计一个字符串中出现最多的字母
// 思路：在另外一个数组存放原数组每个元素出现的位置次数，且次数跟存放不重复数组的下标对应，然后取出最多的次数，对应的下标就是不重复数组里面出现次数最多的元素的下标
var str1 = "jhadfgskjfajhdewqe";
var arr1 =str1.split('');
console.log(arr1);
function MostUnit(){
	var arrA=[];
	var arrB=[];
	for(var i=0;i<arr1.length;i++){
		if(arrA.indexOf(arr1[i])==-1){
			arrA.push(arr1[i]);
			arrB.push(1);
		}else{
			arrB[arrA.indexOf(arr1[i])]++;
		}
		console.log(arrB);
		console.log(arrA[arrB.indexOf(Math.max.apply(Math,arrB))]);

	}
}

console.log(MostUnit());
// 统计一个字符串出现次数最多的字符
var str1 ='abdbabaaaaaa';
var arr1 = str1.split('');
console.log(arr1);
function countMax(){
	arrA =[];
	arrB =[];
	for(i=0;i<=arr1.length;i++){
		if(arrA.indexOf(arr1[i])==-1){
			arrA.push(arr1[i]);
			arrB.push(1);
		}else{
			arrB[arrA.indexOf(arr1[i])]++;
		}
	}
	console.log(arrA);
	console.log(arrB);
	console.log(arrA[arrB.indexOf(Math.max.apply(Math,arrB))]);

}
console.log(countMax());
// 不使用第三方变量得情况下交换两个元素
var a=10;
var b=20;
function Change(a,b){
	b=b-a;
	a=b+a;
	b=a-b;
	return [a,b]
}
console.log(Change(a,b));

// 函数递归
function factorial(num){
	if(num<1){
		return 1;
	}else{
		return num*arguments.callee(num-1);
	}
}

console.log(factorial(2));

// 移除数组中的元素
function remove(arr, item) {
    
    for(i=0;i<arr.length;i++){
        if(arr[i]==item){
            arr.splice(i,1);
            i--;
        }
    }
    return arr;

}
arr =[1, 2, 2, 3, 4, 2, 2];
console.log(remove(arr,2));
console.log(arr);


function curtail(arr) {
    var a=[].concat(arr);
    var b=a.shift();
    return b;
}

t=[1, 2, 3, 4]
console.log(curtail(t));



// js模拟栈，后就先出
var arr=[];
for(var i=0;i<5;i++){
	var temp=i+1;
	arr.push(temp);
	console.log(temp+'入栈');
	console.log(arr);
}
console.log('栈，先进后出');
var len= arr.length;
for(var i=0;i<len;i++){
	console.log(arr.pop());
}

// js模拟队列，先进先出unshift>pop
var arr2=[]
for(var i=0;i<5;i++){
	var temp =i+1;
	arr2.unshift(temp);
	console.log(temp+'插入');
	console.log(arr2);
}
console.log('队列，先进先出');
var len =arr2.length;
for(var i=0;i<len;i++){
	console.log(arr2.pop());
}


// js模拟队列，先进先出push>shift
var arr3=[];
for(var i=0;i<5;i++){
	var temp =i+1;
	arr3.push(temp);
	console.log(temp+'入队');
	console.log(arr3);
}
console.log('队列，先进先出');
var len= arr3.length;
for (var i=0;i<len;i++){
	console.log(arr3.shift());
}



// 冒泡排序
function Maopoa(arr){
	for(i=0;i<arr.length-1;i++){
		for(j=0;j<arr.length-1-i;j++){
			if(arr[j]>arr[j+1]){
				var temp=arr[j];
				arr[j]=arr[j+1];
				arr[j+1]=temp;
			}
		}
	}
	return arr;
}
arrM=[2,3,1,5]
console.log(Maopoa(arrM));

//冒泡排序
exam=[13,23,11,22,10,8]
function sortarr(arr){
    for(var i=0;i<arr.length-1;i++){
        for(var j=0;j<arr.length-1-i;j++){
            if(arr[j]>arr[j+1]){
                var temp=arr[j];
                arr[j]=arr[j+1];
                arr[j+1]=temp;
            }
        }
    }
    return arr;
}

console.log(sortarr(exam));

function bubbleSort(arr) {  
    for(var i = 0;i<arr.length-1;i++) {
        for(var j = i+1;j<arr.length;j++) { 
          if(arr[i]<arr[j]) {
                var tem = arr[i];
                arr[i] = arr[j];
                arr[j] = tem;
            }
        }
    }
    return arr;
}

console.log(bubbleSort(exam));

arrH=[1,2,3,2,2]
var po=Math.floor(arrH.length/2);
var pi=arrH.splice(po,1)[0]
console.log(pi);

// 构造函数
function Person(name,age,job) {
	this.name=name;
	this.age=age;
	this.job=job;
	this.sayName=function(){
		alert(this.name);
	};
	// body...
}
var person1 =new Person('Nichos','29','students')
var person2 =new Person('dingd','22','teacher')
console.log(person1.name);

// 快速排序
function quickSort(arr){
	if(arr.length<=1){
		return arr;
	}
	var arrRight=[];
	var arrLeft=[];
	var point= Math.floor(arr.length/2);
	var p=arr.splice(point,1);
	for(var i=0;i<arr.length;i++){
		 if(arr[i]<p){
		 	arrLeft.push(arr[i]);
		 }else{
		 	arrRight.push(arr[i]);
		 }
	}

	return quickSort(arrLeft).concat(p,quickSort(arrRight));

}
quk=[3,2,14,6]
console.log(quickSort(quk));


//计数
function count(arr, item) {    
	var t=0;
    for(var i=0;i<arr.length;i++){
        if(arr[i]==item){        	
            t++;
        }
        
    }
    return t;
    

}

arr33=[1, 2, 4, 4, 3, 4, 3]
console.log(count(arr33,4));


// 查找数组中重复出现的元素
function duplicates(arr) {
    var a=[];
    for(var i=0;i<arr.length-1;i++)
        for(var j=i+1;j<arr.length;j++){
            if(arr[i]==arr[j]&&a.indexOf(arr[i])==-1){
                a.push(arr[i])
            }
        }
    return a;

}
arr44=[22,1,1,1,3,3,3,4,4,4,4]
console.log(duplicates(arr44));

// js数组迭代函数map和filter
// map方法的使用
arr=[1,2,3,4]
var newArr1 = arr.map(function(item){
	return item*2;
})

console.log(newArr1);
// filter的使用
arr=[1,2,3,4]
var newArr2=arr.filter(function(item){
	if(item%2==0){
		return item;
	}
	
})
console.log(newArr2);
console.log(isNaN(NaN));

// 在构造函数内部定义对象
function person(firstname,lastname,age,eyecolor){
	this.firstname=firstname;
	this.lastname=lastname;
	this.age=age;
	this.eyecolor=eyecolor;
	this.changeName=changeName;
	function changeName(name){
		this.lastname=name;
	}
}

myMother = new person('bill','gaet','11','red')
console.log(myMother.lastname);
myMother.changeName('nii')
console.log(myMother.lastname);


// apply()/call()求数组
var numbers =[5,458,120,-125]
var maxInNumbers1 = Math.max.apply(this,numbers)
var maxInNumbers2 = Math.max.call(this,5,458,120,-125)
console.log('apply:'+maxInNumbers1);
console.log('call:'+maxInNumbers2);