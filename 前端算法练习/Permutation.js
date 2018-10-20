//字符串全排列

function Permutation(str)
{
    // write code here
    // 先进行全排列
    var permunate=function(str){
        var result=[];
        if(str.length===0||!str){
            return [];
        }
        if(str.length==1){
            return [str];
        }else{
            var t=str[0];
            var Rresult=permunate(str.slice(1));
            for(var i=0;i<Rresult.length;i++){
                for(var k=0;k<Rresult[i].length+1;k++){
                    var temp=Rresult[i].slice(0,k)+t+Rresult[i].slice(k)
                    result.push(temp);
                }
            }
            return result;
        }
            
     };

     //利用reduce函数 去重
        
    var filtered=permunate(str);
    var LastResult=filtered.sort().reduce(function(a,b){
        var len=a.length;
        if(len===0||a[len-1]!==b){
            a.push(b)
        }
        return a;
    },[]);
    return LastResult;
}

console.log(Permutation(''));

// 输出数组中个数超过数组长度一半的字符
function MoreThanHalfNum_Solution(numbers){
    if(!numbers||numbers.length===0){
        return 0;
    }
    var len=numbers.length;
    var countValue=numbers.reduce(function(allValue,tValue){
        if(tValue in allValue){
            allValue[tValue]++
        }else{
            allValue[tValue]=1;
        }
        return allValue;
    },{});

    var p=countValue;
    for(var i in p){
        if(p[i]>=len/2){
            return i;        
        }
    }
    return 0;


}

var numbers=[4,2,1,4,2,4]
console.log(MoreThanHalfNum_Solution(numbers));



var names=[4,2,1,4,2,4]
var countNames=names.reduce(function(Allnames,name){
    if(name in Allnames){
        Allnames[name]++;
    }else{
        Allnames[name]=1;
    }
    return Allnames
},{})
console.log(countNames);

var tt={ alice: 2, dd: 2, bob: 1 }
for(i  in tt){
    console.log(tt[i]);
}





// 数组的全排列
// 主要就是定义新的排序规则，也就是把前一个数和后一个数拼接起来的数，然后再与后一个数和前一个数拼接起来的数比较字典序
var num=[55,2,22,44,321]

num.sort(function(a,b){
    var c1=a+''+b;
    var c2=b+''+a;
    return c1-c2;
})
console.log(num);


// var ttt=[55,2,22,44,321]
// tt.sort()
// console.log(tt);


function PrintMinNumber(numbers)
{
    numbers.sort(function(s1,s2){
        let c1=s1+""+s2;
        let c2=s2+""+s1;
        return c1>c2;
    });
    let min="";
    for(var i=0;i<numbers.length;i++){
        min+=numbers[i];
        
    }
    return min;
//     numbers.forEach(i=>min+=i)
//     return min;

}

// console.log(PrintMinNumber(num));
var A=[1,2,3]
console.log(A.indexOf(5));
console.log(A[0]+A[1]);
console.log(Math.sqrt(8));

function GetUglyNumber(index){
    var number=[2,3,5];
    var Ungly=[1];
    function factor(number){
        var str=[];
    if(number===1){
        return [1]
    }else{
        for(var i=1;i<=number;i++){
            if(number%i==0){
                str.push(i)

            }
        }
    }
    return str;

    }
    for(var i=1;i<=index;i++ ){
        var t= factor(i);
        var tt=t.slice(1,t.length-1).toString();
        for(var j=0;j<tt.length;j++){
            if(number.indexOf(tt[j])!==-1){
                Ungly.push(i)
            }
        }
    }
    return Ungly;
    
}

console.log(GetUglyNumber(15));



  function factor(number){
    var str=[];
    if(number===1){
        return [1]
    }else{
        for(var i=1;i<=number;i++){
            if(number%i==0){
                str.push(i)

            }
        }
    }
    return str;

    }

    var p=factor(14);
    var q=p.slice(1,p.length-1)
    console.log(q);
    var number=[2,3,5];   
    for(var i=0;i<q.length;i++){
        console.log(q[i]);
        if(number.indexOf(q[i])==-1){
            console.log(1);
        }else{
            console.log(0);
        }



    }



console.log('丑数');

function GetUglyNumber_Solution(index){
    if(index===0){
        return 0;
    }
    var ungly=[1];
    var s2=0;
    var s3=0;
    var s5=0;
    for(var i=1;i<index;i++){
        ungly[i]=Math.min(ungly[s2]*2,ungly[s3]*3,ungly[s5]*5);
        if(ungly[i]==ungly[s2]*2) s2++;
        if(ungly[i]==ungly[s3]*3) s3++;
        if(ungly[i]==ungly[s5]*5) s5++;
        console.log(s2+'>'+s3+'>'+s5);

    }
    return ungly;


}
console.log(GetUglyNumber_Solution(20));


// 找到第一个只出现一次的字符，并返回其位置

function FirstNotRepeatingChar(str){
    if(!str){
        return 0;
    }
    var Numstr=str.split('')
    function strtoArray(Numstr){
        var countStr=Numstr.reduce(function(a,b){
        if(b in a){
            a[b]++
        }else{
            a[b]=1;
        }
        return a;
    },{})
    return countStr;

    }
    var repeat=strtoArray(Numstr);
    for(var j in Numstr){
        if(repeat[Numstr[j]]===1){
            var t=j;
            break
        }
    }
    return t;

}

str1='8819243223223223'
console.log(FirstNotRepeatingChar(str1));






function FirstNotRepeatingChar(str)
{
    const arr = str.split('');
    for (let i of arr) {
        let index = arr.indexOf(i);
        if (index === arr.lastIndexOf(i)) {
            return index;
        }
    }
    return -1;
}
str1='58819243223223223'
console.log(FirstNotRepeatingChar(str1));

ww=[5,1,3,4,2,6,6,7,7,8,7]
for(var k of ww){
    console.log(k+'>'+ww.indexOf(k)+'>'+ww.lastIndexOf(k));
}

// 连续数列之和等于固定数值
function FindContinuousSequence(sum){
     //两个起点，相当于动态窗口的两边，根据其窗口内的值的和来确定窗口的位置和大小
    var plow=1;
    var phigh=2;
     //存放结果
    var result=[];
    while(plow<phigh){
        //由于是连续的，差为1的一个序列，那么求和公式是(a0+an)*n/2
        var cur=(plow+phigh)*(phigh-plow+1)/2; 
        // var cur = (phigh + plow) * (phigh - plow + 1) / 2;      
        //如果当前窗口内的值之和小于sum，那么右边窗口右移一下
        if(cur<sum){
            phigh++;
        }
        //相等，那么就将窗口范围的所有数添加进结果集
        if(cur==sum){    
            var list=[];        
            for(var i=plow;i<=phigh;i++){
                list.push(i);          

                
            } 
            console.log(list);
            t=result.concat(list)
            plow++

            // t=result.concat(list);
            // plow++;         
         
        }
        //如果当前窗口内的值之和大于sum，那么左边窗口右移一下  
        if(cur>sum){
            plow++;
        }       

    }
    return t;   
    
}

console.log(FindContinuousSequence(100));


function FindNumbersWithSum(array,sum){
    var res=[],pro=[];
    if(!array||!array.length){
        return res;
    }
    var head=0,tail=array.length-1;
    while(head<tail){
        var curr=array[head]+array[tail];
        if(curr===sum){
            res.push([array[head],array[tail]]);
            pro.push(array[head]*array[tail]);
            tail--;
            head++;
        }else if(curr>sum){
            tail--;
        }else{
            head++
        }
    }
    if(res.length===0){
        return []
    }
    var min=Math.min.apply(null,pro)
    var index=pro.indexOf(min);
    return res[index]
}



function FindNumbersWithSum(array, sum){
    if(!array || !array.length){
        return [];
    }
    var result = [];
    var product = [];
    var head = 0, tail = array.length - 1;
    while(head < tail){
        var curr = array[head] + array[tail];
        if(curr === sum){
            result.push([array[head], array[tail]]);
            product.push(array[head] * array[tail]);
            tail--;
            head++;
        } else if(curr > sum){
            tail--;
        } else {
            head++;
        }
    }
    if(result.length === 0){
        return [];
    }
    var min = Math.min.apply(null, product);
    var index = product.indexOf(min);
    return result[index];
}
console.log(FindNumbersWithSum([1,2,3,4],5));



//
var a=null;
console.log(typeof a);

console.log(''==0);

var foo='11'+2-'1'

console.log(foo);