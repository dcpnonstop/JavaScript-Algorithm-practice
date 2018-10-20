var names='123223223223'
var d=names.split('');
var countNames=d.reduce(function(Allnames,name){
    if(name in Allnames){
        Allnames[name]++;
    }else{
        Allnames[name]=1;
    }
    return Allnames
},{})
console.log(countNames);

function FindContinuousSequence(sum)
{
    // write code here
    //两个起点，相当于动态窗口的两边，根据其窗口内的值的和来确定窗口的位置和大小

    var plow=1,phigh=2;
     //存放结果
    var result=[];
    if(sum<3){
    	return result;
    }
    while(plow<phigh){
        //由于是连续的，差为1的一个序列，那么求和公式是(a0+an)*n/2
        var cur=(plow+phigh)*(phigh-plow+1)/2;
        var list=[];
        
        //相等，那么就将窗口范围的所有数添加进结果集
        if(cur==sum){
            
            for(var i=plow;i<=phigh;i++){
                list.push(i);
                
                
                // console.log(list);
                
            }
            result.push(list)
            plow++
            
            // var t=result.concat(list);
            // console.log(list);    
            // var t=list;        
            // plow++;
            // //如果当前窗口内的值之和小于sum，那么右边窗口右移一下
        }else if(cur<sum){
            phigh++;
        }else{
            //如果当前窗口内的值之和大于sum，那么左边窗口右移一下
            plow++;
        }

    }
    return result;
}
console.log(FindContinuousSequence(100));


function Add(num1, num2)
{
    while( num2!==0 ){
        var sum = num1 ^ num2;
        var carray = (num1 & num2) << 1;
        num1 = sum;
        num2 = carray;
    }
    return num1;
}

console.log(Add(23,25));

console.log(parseInt("010"));



function StrToInt(str){
    if(str.length === 0){
        return 0;
    }
    var format = str.match(/^(\+?|-?)(\d+)$/);
    if(!format){
        return 0;
    }
    var num = 0;
    var temp = format[2];
    var base = 1;
    var flag = format[1];
    for(var i = temp.length - 1; i >= 0; i--){
        num += parseInt(temp[i]) * base;
        base *= 10;
    }
    return flag === '-' ? num * (-1) : num;
}

// str='12131'
// console.log(strToInt(str));

//把字符串转换成数字
// 1.正则表达式的应用 2.flag的设立，保证正数和负数的区别判断 3. str.slice方法的使用

function StrToIn(str)
{
    // write code here
    if (str == '') {
        return 0;
    } 
var arr = str.split('');
    var pattern = /\d/;
    var flag = 0;
    for (var i = 0; i < arr.length; i++) {
        if (arr[0] == '+') {
                flag = 1;
        } else if (arr[0] == '-') {
            flag = 2;
        } else {
        if (!pattern.test(arr[i])) {
            return 0;
        }    
        }
    }
    if (flag == 1) {
        return Number(str.slice(1));
    } else if (flag == 2) {
        return -Number(str.slice(1));
    } else {
   return Number(str);    
    }
}
str='-121a31'
console.log(StrToInt(str));
console.log(StrToIn(str));

// 字符串反转
function ReverseSentence(str){
	result=''
	arr=str.split(' ')
	for(var i=arr.length-1;i>=0;i--){
		result+=' '+arr[i];

	}
	return result.slice(1);
}
str="student. a am I"

console.log(ReverseSentence(str));


function countStr(str){
	var arr=str.split(' ');
	if(arr.length===1){
		return arr[0].length;
	}
	var t=arr[arr.length-1]
	return t.length;
}
str1='XSUWHdQ'
console.log(str1.toString());
// console.log(countStr(str1));



// js标准输入输出
var readline = require('readline');
const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
});
rl.on('line', function(line){
   var tokens = line.split(' ');
    console.log(tokens[tokens.length-1].length);
});
str2='ad ddeDDdd'
console.log(str2.toLowerCase());

var tset=new Set([5,4,4,4,4,3,2,2,43,43,4,34,3,4,3])
console.log(Array.from(tset));
console.log([...new Set([5,4,4,4,4,3,2,2,43,43,4,34,3,4,3])]);

var q='00000000';
var arr=['abc00000','123456789123456789']
for(var j=0;j<arr.length;j++){
    if(arr[j].length<=8){
        var t=arr[j]+q;
        console.log(t.slice(0,8)); 
    }else{
    	var len=arr[j].length;
    	for(var i=0;i<len;i+=8){
    		var s=arr[j].slice(i,i+8);
    		if(s.length<8){
    			var p=s+q;
    			console.log(p.slice(0,8));

    		}else{
    			console.log(s);
    		}

    	}

    }

}

// 字符串分割按组输出
var q='00000000';
var arr=[];
for(var i=0;i<2;i++){
    arr.push(readline());
    
}
for(var j=0;j<arr.length;j++){
    if(arr[j].length<=8){
        var t=arr[j]+q;
        console.log(t.slice(0,8)); 
    }else{
    	var len=arr[j].length;
    	for(var i=0;i<len;i+=8){
    		var s=arr[j].slice(i,i+8);
    		if(s.length<8){
    			var p=s+q;
    			console.log(p.slice(0,8));

    		}else{
    			console.log(s);
    		}

    	}

    }

}

}



// 十六进制转十进制
// var Arr=['A10','S20','W10','D30','X','A1A','B10A11','A10'];
// for(var i in Arr){
// 	console.log(Arr[i]);
// }

// var arr1=['1','2','3','2','3','2','4','2']
// for(var i=0;i<arr1.length;i++){
// 	console.log(Number(arr1[i])/2);
	
// }


// var k=realine();
// var arr2=[]
// for(var i=0;i<k;i++){
//     arr2.push(readline())

// }

// var cout=0,sum=0,count=0;
// function jishu(arr2) {
//     for(var i=0;i<arr2.length;i++){
//         if(arr2[i]<0){
//             cout++;
//         }else{
//             count++;
//             sum+=parseInt(arr2[i]);
//         }
//     }

//     var ppp=sum/parseInt(count);
//     console.log(cout+' '+ppp.toFixed(1))

//     // var t=cout+' '+ppp.toFixed(1);
//     // return t;

// }
// jishu(arr2)



for(var x=0;x<100/5;x++){
    var y=(200-14*x)/8;
    var z=100-y-z;
    if(y=parseInt(y)&&y>=0&&z>=0){
        console.log(x+' '+y+' '+z);
    }
}