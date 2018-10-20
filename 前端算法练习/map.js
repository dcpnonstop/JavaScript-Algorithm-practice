function double(x){
	return 2*x;
}

function add_2(x){
	return x+2;
}

function map(func,list){
	var output=[];
	for(idx in list){
		output.push(func(list[idx]));
	}
	return output;
}

console.log(map(add_2,[2,3,4]));
console.log(map(double,[2,3,4]));




function buildMultiplier(x){
	return function(y){
		return x+y;
	}
}
 var double =buildMultiplier(2)
 console.log(double(3));


 var arr=[1,3,5,7,8];
 var t1=arr.reduce(function(x,y){
 	return x+y;
 },10)
 console.log(t1);

 function findAllOccurrences(arr,target){ 	
 	var pos=[];
 	for(var i=0;i<arr.length;i++){
 		if(arr[i]==target){
 			pos.push(i);
 		}
 		
 	}
 	return pos;
 }
arr='abcdefabc';
for(var i=0;i<arr.length;i++){
	console.log(arr[i]);
}
console.log(typeof(arr));
arr1= arr.split('');
console.log(typeof(arr1));
console.log(arr1[1]);
console.log(findAllOccurrences(arr,'a'));


function functions(flag) {
    if (flag) {
      function getValue() { return 'a'; }
    } else {
      function getValue() { return 'b'; }
    }

    return getValue();
}

function parse2Int(num) {
    return parseInt(num,10);
}

console.log(parse2Int('12ox'));

// 打点计时输出

// function count(start,end){
// 	var timer= setInterval(function(){
// 		if(start<=end){
// 			 console.log(start);
// 			 start++;
// 		}
// 	},100);
// 	return {cancel:function(){clearInterval(timer);}}
// }


// function count(start, end) {
// 	console.log(start);
//     var timer=setInterval(function(){
//         if(start<end){
//         	start++;
//             console.log(start);            
//         }else clearInterval(timer);
//     },100)
//     return {cancel:function(){clearInterval(timer);}}

// }
// console.log(count(1,10));



var t=[2,3,4]
for(idx in t){
	console.log(idx);
}

var q=[2,3,4]
for(var color of q){
	console.log(color);
}


function count1(num){
	if(num%2==0&num%5==0){
		return 
	}

}


// 将数组arr中的元素作为调用函数fn的参数


var fn=function (greeting, name, punctuation) {
	return greeting + ', ' + name + (punctuation || '!');
}
var arr22=['Hello', 'Ellie', '!']

function argsAsArray(fn, arr22) {
 return fn.apply(this,arr22);
}
console.log(argsAsArray(fn, arr22));

// 冒泡排序
function sort(elements){
	for(var i=0;i<elements.length-1;i++){
		for(var j=0;j<elements.length-i-1;j++){
			if(elements[j]>elements[j+1]){
				var swap=elements[j];
				elements[j]=elements[j+1];
				elements[j+1]=swap;

			}

		}
	}

}
var aa=[123,4,3,45,3,2,3,12,23,2];
sort(aa)
console.log(aa);

// JS检测一个变量是string类型
console.log(typeof '232')==='string';
// 去除字符串空格
var str=' 23 23 '
console.log(str.replace(/\s*/g,''));
console.log(str.trim());
console.log(str.trimLeft());

// 获取浏览器URL中查询字符串中的参数
function showWindowHref(strHref){
    // var sHref = window.location.href;
    var args = strHref.split('?');
    if(args[0] == strHref){
        return "";
    }
    var arr = args[1].split('&');
    var obj = {};
    for(var i = 0;i< arr.length;i++){
        var arg = arr[i].split('=');
        obj[arg[0]] = arg[1];
    }
    return obj;
}
var href = showWindowHref('http://www.runoob.com/jquery/misc-trim.html?channelid=12333&name=xiaoming&age=23'); 
// obj
console.log(href['age']); // xiaoming


// 利用split切分字符串
var URL='channelid=12333&name=xiaoming&age=23'
var arr=URL.split('&')
console.log(arr);
var obj={};
for(var i=0;i<arr.length;i++){
	var arg=arr[i].split('=')
	console.log(arg);
	obj[arg[0]]=arg[1];
}
console.log(obj);
for(var key in obj){
	console.log(key+'='+obj[key]);
}
obj['name']='121'
console.log(obj);

// 工厂模式构建函数
function creatPerson(name,age,job){
	var o= new Object();
	o.name=name;
	o.age=age;
	o.job=job;
	o.sayName=function(){
		alert(this.name)
	}

	return o;
}
var person1=creatPerson('dd','22','ddd')
console.log(person1);


// 构造函数模式
function Person(name,age,job){
	this.name=name;
	this.age=age;
	this.job=job;
	this.sayName=function(){
		alert(this.name);
	}
}
var person2=new Person('ff','23','eeee')
console.log(person2);


// 原型继承
function SuperType(){
	this.property=true;
}
SuperType.prototype.getSuperValue=function(){
	return this.property;
}

function SubType(){
	this.subproperty=false;
}

SubType.prototype=new SuperType();
SubType.prototype.getSubvalue=function() {
	return this.subproperty;
}
var instance=new SubType();
console.log(instance.getSuperValue());
console.log(instance.getSubvalue());