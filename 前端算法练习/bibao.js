// 链接：https://www.nowcoder.com/questionTerminal/578026cd24e3446bbf27fe565473dc26
// 来源：牛客网

// function makeClosures(arr, fn) {
//     var result=new Array();
//     for(var i=0;i<arr.length;i++){
//         result[i]=function(num){
//             return function(){
//                 return fn(num);
//             }
//         }(arr[i]);
//     }
//     return result;

// }


// arr=[1,2,3]
// fn=function (x) { 
// 	return x * x; 
// }
// result=makeClosures(arr,fn)
// console.log(result[1]);

// function partial(fn,str1,str2){
// 	var result=function(str3){
// 		return fn.call(this,str1,str2,str3);
// 	}
// 	return result;
// }

function useArguments(){
	var sum=0;
	for(var i=0;i<arguments.length;i++){
		sum+=arguments[i];
	}
	return sum;

}

console.log(useArguments(1,2,3,4,5));

// useArguments(1,2,3,4,5);
console.log(arguments.length);


// 继承
function Parent(){
	this.name='mike';
}
function Child(){
	this.age='22'
}

Child.prototype=new Parent()
var test=new Child();
console.log(test.age);
console.log(test.name);


// 借用构造函数
function Parent1(age){
	this.name=['1','2','3']
	this.age=age;
}
function Child1(age){
	Parent1.call(this,age);
}
var test=new Child1(22)
console.log(test.name);
console.log(test.age);
test.name.push('bill')
console.log(test.name);

// 
function Parent3(name){
	this.name=name;
}

Parent3.prototype.play=function(){
	console.log(this.name);
}

function Child3(name,age){
	Parent3.call(this,name);
	this.age=age;
}
// 实现组合式继承的时候，Child.prototype = Object.create(Parent.prototype)，这是最标准的做法。并且组合式继承也是唯一标准的继承做法，
Child3.prototype=Object.create(Parent3.prototype);
// 多态
Child3.prototype.play=function(){
	Parent3.prototype.play.call(this);
	console.log(this.age);
}

// bind返回值是函数
var obj={
	name:'linxin'
}

function func(){
	console.log(this.name);
}

var func1=func.bind(obj);
func()
func1()
// arguments 是一个对象，包含属性和属性值
function add(a,b){
	console.log(typeof arguments);
	console.log(arguments.length);
	var arr=[];
	// 将arguments转换成数组
	for(var i=0;i<arguments.length;i++){
		arr.push(arguments[i])
	}


	return arr;
}

t=add(10,20)
console.log(typeof t);
console.log(t);


// 
function callIt(fn) {
    return fn.apply(this,[].slice.call(arguments,1));
    
}

function fuk(){
	name:'2';
	age:'23';
}

tb=fuk.apply(this,[].slice.call(arguments,1))
console.log(tb);


function p(fn){
	var arr=Array.prototype.slice.call(arguments,1);
	var result=function(){
		var arr1=Array.prototype.slice.call(arguments);
		return fn.apply(null,arr.contact(arr1))
	}
	return result;
}
//且运算符"&&"的运算规则是：如果第一个运算子的布尔值为true，则返回第二个运算子的值（注意是值，不是布尔值）；如果第一个运算子的布尔值为false，则直接返回第一个运算子的值，且不再对第二个运算子求值。
// 或运算符“||”的运算规则是：如果第一个运算子的布尔值为true，则返回第一个运算子的值，且不再对第二个运算子求值；如果第一个运算子的布尔值为false，则返回第二个运算子的值。
function and(a,b){
	return a&&b
}

function or(a,b){
	return a||b
}
console.log(Boolean(1));
console.log(Boolean(0));

console.log(and(1,0));


function valueAt(num){
	var s=num.toString(2);
	var t=s.split('');
	var p=t.unshift('0')
	return t.join('')
}
console.log(valueAt(65));



function convertToBinary(num) {
    var s=num.toString(2).split('');
       if(s.length<8){
           for(var i=0;i<8-s.length;i++){
               s.unshift('0');
           }          
        
    }
    return s.join('');

}

console.log(convertToBinary(65));


str='fdd121324242'
var arr=str.match(/\d{3}/);
console.log(arr[0]);

function matchPa(str){
	var reg=/^\d{3}\-\d{3}\-\d{4}$/
	return reg.test(str);
}



// 数组的全排列组合
function printArr(arr,n,res){
    for(var i = 0; i<arr[i].length;i++){
        if(n == 0){
            res = []
        }
        if(n<arr.length){
            var _res = res.slice()
            _res.push(arr[n][i])
            if(n == arr.length-1){
                console.log(_res)
            }else{
                printArr(arr,n+1,_res)
            }
        }
    }
}


var arr = [[1,2],[3,4],[5,6]]
printArr(arr,0)

var now=new Date()
console.log(now.getDate(),now.getMonth());



// 给定一个整数数组和一个目标值，找出数组中和为目标值的两个数。

// 你可以假设每个输入只对应一种答案，且同样的元素不能被重复利用。
var twoSum=function(nums,target){
	var res=[];
	for(var i=0;i<nums.length-1;i++)
		for(var j=i+1;j<nums.length;j++){
			if(nums[i]+nums[j]==target){
				res[0]=i;
				res[1]=j;
			}
		}
		return res;
}
t=twoSum([2, 7, 11, 15],9)
console.log(t);





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
console.log(href['age']); // xiaoming、

// 
function getUrlParam(sUrl,sKey){
	var args=sUrl.split('?');
	if(args[0]==sUrl){
		return ''
	}
	var arr =args[1].split('&');
	var obj=[];
	for(var i=0;i<arr.length-1;i++){
		var arg=arr[i].split('=');
		if(arg[0]==sKey){
			obj.push(arg[1]);
		}
	}
	return obj;
}
		
		

t='http://www.nowcoder.com?key=1&key=2&key=3&test=4#hehe'
sKey='key'
console.log(getUrlParam(t,sKey));


function getUrlParam(sUrl,sKey){
    var result = {};
    sUrl.replace(/\??(\w+)=(\w+)&?/g,function(a,k,v){
        if(result[k] !== void 0){
            var t = result[k];
            result[k] = [].concat(t,v);
        }else{
            result[k] = v;
        }
    });
    if(sKey === void 0){
        return result;
    }else{
        return result[sKey] || '';
    }
}

t='http://www.nowcoder.com?key=1&key=2&key=3&test=4#hehe'
sKey='key'
console.log(getUrlParam(t));


var text='cat,bat,sat,fat'
var result= text.replace(/(.at)/g,'$1');
console.log(result);


var text = 'cat, bat, sat, fat';
    // 使用/at/g 匹配字符串中所有的at，并将其替换为ond，
    // 函数的参数分别为：当前匹配的字符，当前匹配字符的位置，原始字符串
    var result = text.replace(/at/g, function(match, pos, originalText) {
        console.log(match + '  ' + pos+ '  '+originalText);
        return 'ond'
    });
    console.log(result);


    t='http://www.nowcoder.com?key=1&key=2&key=3&test=4#hehe'
    var reg=/\?(\w+)=(\w+)&?/g;
    console.log(reg.exec(t));



    // 

  // var oNamespace={a: {test: 1, b: 2}}
  // console.log(typeof oNamespace);
  // for(i in oNamespace){
  // 	console.log(typeof oNamespace[i]);
  // }

function namespace(oNamespace, sPackage) {
    var arr=sPackage.split('.');
    var obj=oNamespace;
    for(var i=0;i<arr.length;i++){
        //空间命名在oNamespace中
        if(arr[i] in oNamespace){
            ////属性不为对象
            if(typeof oNamespace[arr[i]]!=='object'){
                //将此属性设为空对象
                oNamespace[arr[i]]={};
            }
            }else{
                oNamespace[arr[i]] = {};//空间名不在对象中，且将此属性设为空对象
        }
        oNamespace=oNamespace[arr[i]];//将指针指向下一个空间名属性
    }
    return obj;
    
}

console.log(namespace({a: {test: 1, b: 2}}, 'a.b.c.d'));

function unique(arry){
	var arr=[];
	for(var i=0;i<arry.length;i++){
		var current=arry[i];
		if(arr.indexOf(current)===-1){
			
				arr.push(current);
					
		}
	}
	return arr;
}
console.log(unique([false, true, undefined, null, NaN, 0, 1, {}, {}, 'a', 'a', NaN]));


Array.prototype.uniq=function(){
	var arr=[];
	var flag=true;
	for(var i=0;i<this.length;i++){
		if(arr.indexOf(this[i])===-1){
			if(this[i]!=this[i]){
				if(flag){
					arr.push(this[i]);
					flag=false;
				}
			}else{
				arr.push(this[i])
			}
		}
		return arr;
	}
}
var t='hello world, 牛客'
for(i in t){
	if(t.charCodeAt(i)>255){
		console.log(t[i]);	

	};
}

function count(str){
	var arr=str.replace(/\s+/g,'').split('');
	var obj={};
	for(var i=0;i<arr.length;i++){
		if(obj[arr[i]]){
			obj[arr[i]]++;
		}
		else{
			obj[arr[i]]=1;
		}
	}
	return obj;
}
var q='hello world'
console.log(count(q));

function cssStyle2DomStyle(sName){
	if(sName[0]==='-'){
		d=sName.replace(/-/,'')
	}
	return d.replace(/-(\w)(\w+)/g,function(a,b,c){
		return a+'/'+b+'/'+c
	})

}
s='-223-ee'
console.log(cssStyle2DomStyle(s));

var Q="efabcbdddef"
Q.replace(/(a)(b)/g, function(i,j,k,q,e){
	console.log(i+'|'+j+'|'+k+'|'+q+'|'+e);
	console.log(arguments)
	console.log(Array.prototype.slice.call(arguments));
});
console.log(Q);


var pattern=/8(.*)8/;  
var str='This is a 8baidu8';  
console.log(str.replace(pattern,'$1'));


// var num=12000000.11 
// console.log(num.toString());
function commay(num){
	var num=12000000.11 
	return num&&num.toString().replace(/(\d)(?=(\d{3})+\.)/g,function($1,$2){
		// return $2+',';
		console.log(arguments);
		console.log($2);
		console.log($1);


	});
}
commay()
// console.log(commay(num));

function capitialize(str){
	return str.replace(/(^|\s)([a-z])/g, function($1, $2, $3){
		console.log(arguments);
		return $2+$3.toUpperCase();
	});
}
console.log(capitialize("i am a boy, not a girl!"));

// -webkit-border-image>>>webkitBorderImage

var ff='-webkit-border-image'
var pp='font-size'
function cssStyle2DomStyle(sName){
	var t1=sName.replace(/\-/g,' ');
	var t2=t1.replace(/(^|\s)([a-z])/g,function(x,y,z){
		return y+z.toUpperCase();
	});
	var t3=t2.replace(/\s/g,'')[0].toLowerCase()+t2.replace(/\s/g,'').slice(1)

	// var t3=t2.replace(/\s/g,'').slice(1)
	return t3
}
console.log(cssStyle2DomStyle(pp));


t5='121323'
console.log(t5.slice(1));


function cssStyle2DomStyle(sName){
if(sName[0]==='-'){
d=sName.replace(/-/,'')
}
return d.replace(/-(\w)(\w+)/g,function(a,b,c){
return b.toUpperCase()+c.toLowerCase();
})

}

var t=new Date();
console.log(('0'+'10').slice(-2));
console.log(['日', '一', '二', '三', '四', '五', '六'][t.getDay()]);

function formatDate(t,str){
  var obj = {
    yyyy:t.getFullYear(),
    yy:(""+ t.getFullYear()).slice(-2),
    M:t.getMonth()+1,
    MM:("0"+ (t.getMonth()+1)).slice(-2),
    d:t.getDate(),
    dd:("0" + t.getDate()).slice(-2),
    H:t.getHours(),
    HH:("0" + t.getHours()).slice(-2),
    h:t.getHours() % 12,
    hh:("0"+t.getHours() % 12).slice(-2),
    m:t.getMinutes(),
    mm:("0" + t.getMinutes()).slice(-2),
    s:t.getSeconds(),
    ss:("0" + t.getSeconds()).slice(-2),
    w:['日', '一', '二', '三', '四', '五', '六'][t.getDay()]
  };
  return str.replace(/([a-z]+)/ig,function($1){return obj[$1]});
}

var qq=formatDate(new Date(), 'yyyy-MM-dd HH:mm:ss 星期w')
console.log(qq);

// 斐波那契数列
function Fibonacci(n)
{
    // write code here
    var arr=[1,1]
    if(n===0){
        return 0;
    }else{
        for(var i=2;i<=n;i++){
            arr[i]=arr[i-1]+arr[i-2];
        }
    }
    return arr;
    
}
console.log(Fibonacci(100));

function jumpFloor(number){
	var a=1,b=2,temp=0;
	// if(number<=2){
	// 	return number;
	// }
	if(number===1){
		return 1;
	}
	if(number===2){
		return 2;
	}
	for(var i=3;i<=number;i++){
		temp=a+b;
		a=b;
		b=temp;

	}
	return temp;
}



console.log(jumpFloor(4));

kk=-4
console.log(100>>2);
console.log(-100>>>0);

n=10
console.log(n.toString(2));
var arr = n.toString(2).split('');
console.log(arr);
var qq=arr.reduce(function(a,b){
	return b==='1'?a+1:a
},0)
console.log(qq);


   var n=1
   var t=n.toString(2).split('');
   console.log('!!'+t);
   var sum=0;
   for(var i=0;i<t.length;i++){
   		console.log('-'+t[i]);
        if(t[i]==1){
            sum=sum+1
        }
        
        

    }
    console.log(sum);
    console.log([1,2].concat([2,3]));


    function reOrderArray(array)
{
    // write code here
    var pre=[];
    var pos=[];
    for(var i=0;i<array.length;i++){
        if(array[i]%2==0){
            pos.push(array[i]);
        }else{
            pre.push(array[i])
        }
    }
    return pre.concat(pos)
}
console.log(reOrderArray([1,2,3,4]));







for(var x=0;x<100/5;x++){
    var y=(200-14*x)/8;
    var z=100-y-x;
    if(y===parseInt(y)&&y>=0&&z>=0){
        console.log(x+' '+y+' '+z);
    }
}

var y=2012,m=12,d=31;
var a=[31,28,31,30,31,30,31,31,30,31,30,31]
var b=[31,29,31,30,31,30,31,31,30,31,30,31]
var sum=0;
for(var i=0;i<m-1;i++){
	if(y%4==0&&y%100!==0||y%400==0){
	sum+=b[i];
}else{
	sum+=a[i];
}

}
sum=sum+d
console.log(sum);




//定义主函数，回调函数作为参数
function A(callback){
	callback();
	console.log('我是主函数');
}
//定义回调函数
function B(){
	setTimeout(function(){console.log('我是回调函数');},3000)//模仿耗时操作  
}

A(B)


var str='adcef'
var t=str.slice(0,2)
var reg=RegExp(t)
console.log(reg.test(str));