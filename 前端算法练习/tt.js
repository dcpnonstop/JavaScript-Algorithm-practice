
var a=439<0||typeof(4399+'')
console.log(a);
console.log(439<0);
console.log(typeof(4399+''));

var b=[]
b[0]=0
b[1]=1
b.foo='c'
console.log(b.length);



function test(){
	var n=4399;
	function add(){
		n++;
		console.log(n);
	}
	return {n:n,add:add}
}

var result=test();
var result2=test();
result.add();
result.add()
console.log(result.n);
result2.add()

var ten='test string'
console.log(typeof ten);
console.log(ten==undefined);
console.log(null==undefined);


var obj ={a:1,
	b:function () {
		console.log(this.a);
	}}; 
var fun =obj.b(); 
fun;





// var str=readline();
// var arr='';
function tt(num){
	var arr=[];
for(var i=2;i<=num;i++){
	if(num%i==0){
		num=num/i;
		arr.push(i)
		i=1
	}
}
var result=arr.sort(function(a,b){
	return a-b;
}).join(' ')

return result+' '

}

console.log(tt(180));

function pp(num1){
	var t=parseInt(num1);
	var p=num1-t;
	if(p>=0.5){
		t+=1
	}
	return t

}
console.log(pp(12.1));
console.log(parseInt(2.2));

var str3='2752771'
var arr3=str3.split('').reverse()
console.log(arr3);
var arr4=[];
for(var i=0;i<arr3.length;i++){
	if(arr4.indexOf(arr3[i])===-1){
		arr4.push(arr3[i])
	}
	
}

console.log(arr4.toString().replace(/,/g,''));

var numInt='abcd'
var arr=numInt.split('').reverse().join();
console.log(arr);

var str4='abcd'
var len=str4.length;
var str5=''
for(var i=len-1;i>=0;i--){
	str5+=str4[i];

}
console.log(str5);


var str6='I am a boy'
var arr6=str6.split(' ');
var str7=''
for(var i=arr6.length-1;i>=0;i--){
	str7=str7+arr6[i]+' '

}
console.log(str7.slice(0,str7.length-1));

str='ab'
console.log(str.charCodeAt());


var arr0=['cap','to','cat','card','two','too','up','boat','boot']



var tu=arr0.sort(function(a,b){

	return a.charCodeAt()-b.charCodeAt();
})
for(var i=0;i<tu.length;i++){
	console.log(tu[i]);
}


// var str8=6
// var pi=[];
// while(str8>0){
// 	t=str8%2;
// 	pi.push(t);
// 	str8=str8/2;
	
	
// }
// console.log(pi);
var num=19934318
var arr=num.toString(2).split('');
var t=0;
for(var i=0;i<arr.length;i++){
    if(arr[i]==='1')
        t++;
}
console.log(t)
var x=19934318
console.log(x.toString(2));




    // var sHref = window.location.href;
    var strHref='http://www.test.com?a=1&b=2&c=3'
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
    var t=obj;

    console.log(t['b']);

function packageMaxValue(weight, value, size){
    // 省略参数合法性校验
    let bagMatrix = []
    for(let w = 0; w <= size; w++) {
        // js不能直接创建二维数组，所以在此初始化数组
        bagMatrix[w] = []
        for (let j = 0; j < 5; j++) {
            // 背包的容量为0，那么一个东西也装不下，此时的值肯定也是为0
            if(w === 0) {
                bagMatrix[w][j] = 0
                continue
            }
            // 背包的容量小于物品j的重量，那么就没有上述情况a了
            if(w < weight[j]){
                bagMatrix[w][j] = bagMatrix[w][j-1] || 0
                continue
            }
            bagMatrix[w][j] = Math.max((bagMatrix[w-weight[j]][j-1] || 0) + value[j], bagMatrix[w][j-1] || 0)
        }
    }
    return bagMatrix
}


    var  weight=[2,2,6,5,4]
    var value=[6,3,5,4,6]
    var size=10
    console.log(packageMaxValue(weight,value,size));



// s1='A10'
// s2='B20'
// console.log(s1.slice(1,s1.length));
// console.log(-parseInt(s1.slice(1,s1.length))+parseInt(s2.slice(1,s2.length)));
// reg=/^[ADWS]\d+$/
// console.log(reg.test(s));

// var Arr=['A10','S20','W10','D30','X','A1A','B10A11','A10'];
str='A37;S1;S72;S41;W21;W32;A45;A98;D97;D69;W57;W11;S41;S0;S24;S83;A75;W77;S32;D18;A24;D20;A65;D95;S18;W56;A84;W30;S3;S50;D64;S84;D82;A86;A36;S85;S94;W64;W62;A12;W12;S84;W29;A52;A73;W55;W71;D43;D76;D49;W19;S56;W63;W56;A68;D68;D40;A48;W5;A12;S84;A2;S44;A93;D51;D64;S4;W32;W27;W15;W70;A47;S77;S88;A25;D51;D8;A34;A71;A5;D83;S36;S72;A34;D46;S29;S5;W57;W16;S42;A23;A30;D43;S0;W62;A34;D60;D31;W89;W91;S87;A15;S15;S18;W83;S82;W87;W73;D42;A92;D48;A65;D36;A11;W50;W38;W2;A0;D65;W29;D56;S64;D31;W8;A56;A45;A56;W54;A97;D97;A90;S72;A95;A89;S78;A35;A31;W68;W42;A73;S73;A24;S28;D69;W53;S54;D80;D27;W24;S86;A17;A36;A41;A1;D19;S53;S96;A31;A52;A63;A18;S54;A35;A82;W95;D8;W48;S75;W11;S9;W60;D68;A92;A96;W32;S30;D26;W61;S0;D10;S89;W31;D4;W37;S49;D79;S56;A87;S61;A61;D96;W86;S81;D50;S91;A68;A82;A36;A16;S6;W25;D76;D94;A20;A37;D91;S58;A54;S77;S27;A35;S6;A88;A14;S72;D12;A95;W93;W1;A73;A55;A13;S55;W43;W6;D37;W19;W79;W56;S26;A36;W85;A6;W94;A54;A12;S0;A13;D18;W14;A52;W44;D83;W17;W73;A72;D56;A63;S14;A64;A84;S54;D67;A92;D46;A51;D99;W42;W2;D22;S14;D96;A79;A41;S65;D8;S41;D30;S61;D77;A52;W2;S11;W26;D47;A65;S11;D2;W98;A30;D36;W26;S41;S71;D65;D76;D28;D25;S24;S24;S58;W13;D80;A58;S64;S52;W54;S51;S40;W20;D54;W13;A7;D37;D93;A74;D24;S0;A5;W52;D86;D22;W22;S13;D56;S99;D67;S34;S5;D47;D87;D41;S15;S66;W10;D55;A63;S57;W12;S96;W28;W96;S33;D70;D75;S20;W76;D83;A34;W29;S24;A7;W11;W81;S85;W1;W71;W73;D20;A62;S2;W43;S22;D18;W35;A15;S72;W12;S12;D93;S37;S55;D33;D52;S85;W97;A88;W47;A17;A50;A40;D9;A0;D13;A16;S87;S61;D12;D8;D69;S59;S71;A7;W99;D81;W6;D48;A92;D23;D47;W37;W30;A5;S96;D28;A13;D53;D17;D9;D58;S78;S26;W17;D88;A11;W87;W94;D45;D60;W52;S71;S71;D35;D60;W60;D73;A42;D57;A25;W87;A4;W74;W70;A50;S22;S63;W15;A62;S70;A15;W58;D19;D56;A80;S95;S57;D75;A16;S8;D88;S33;S94;A43;D97;S11;D53;W55;S52;W59;S92;D39;D40;W34;W33;D52;D19;S87;A21;D94;W5;W42;A50;D27;A29;D47;W12;D5;S70;D47;S16;W52;W30;D2;A48;S1;D68;W82;A47;S84;S56;S60;S14;W64;W8;A41;W8;S4;D80;A49;D72;'
var Arr=str.split(';');
// var Arr=['A12','B34','C45','D55']
var x=0;
var y=0;
var tl=0
var tr=0
var td=0;
var tu=0
var Arr2=[]
var reg=/^[ADWS]\d+$/;
for(var i in Arr){
	if(reg.test(Arr[i])){
		Arr2.push(Arr[i]);		
	}
}
console.log(Arr2);
for(var i in Arr2){
	if(Arr2[i][0]=='A'){
			var xl=-parseInt(Arr2[i].slice(1,Arr2[i].length));
			tl+=xl;

		}
		
		if(Arr2[i][0]=='D'){
			var xr=parseInt(Arr2[i].slice(1,Arr2[i].length));
			tr+=xr;
		}
		if(Arr2[i][0]=='S'){
			var yd=-parseInt(Arr2[i].slice(1,Arr2[i].length));
			td+=yd
		}
		if(Arr2[i][0]=='W'){
			var yu=parseInt(Arr2[i].slice(1,Arr2[i].length));
			tu+=yu;
		}		


}
console.log(Arr2);
console.log(tl+'=='+tr)
console.log(td+'=='+tu);
x=tl+tr;
y=td+tu;
console.log(x+','+y);
	


//IP地址检测

var a,b;
(function(){
    console.log(a);
    console.log(b);
    var a=b=3;
    console.log(a);
    console.log(b);
})();
console.log(a);
console.log(b);

function * gen() {
    yield 1;
    yield 2;
    yield 3;
}
console.log(([])?true:false); 
console.log(([]==false?true:false)); 
console.log(({}==false)?true:false)



str44='123456789'
console.log(str44.slice(-16,str44.length));

var errors={};
var files=[];
var path=require('path');
var str='E:\V1R2\product\fpgadrive.c 1325'
errs=str.split(' ')
filename=path.win32.basename(errs[0]);
filename=filename.slice(-16,filename.length)+' '+errs[1]
if(errors[filename]){
	errors[filename];

}else{
	errors[filename]=1;
}
if(files.indexOf(filename)===-1){
	files.push(filename);
}
files = files.slice(-8, files.length);
for (var i=0; i< files.length; i++) {
        console.log(files[i],errors[files[i]]);
    }
console.log(filename);

//满足条件的字符串


//1.长度超过8位
function checkLength(stringPass){
	if(stringPass==null||stringPass.length<=8)
	{
		return false;
	}else{
		return true;
	}
}

// 2.包括大小写字母.数字.其它符号,以上四种至少三种
function checkCharkinds(stringPass){
	var digit=0,lowercase=0,uppercase=0,others=0;
	for(var i=0;i<stringPass.length;i++){
		if(stringPass[i]>='0'&&stringPass[i]<='9'){
			digit=1;
			continue;
		}
		else if(stringPass[i]>='a'&&stringPass[i]<='z'){
			lowercase=1;
			continue;
		}
		else if(stringPass[i]>='A'&&stringPass[i]<='Z'){
			uppercase=1;
			continue;
		}
		else{
			others=1;
			continue;			
		}

	}
	var total=digit+lowercase+uppercase+others;
	return total>=3?true:false;
}


// 3.不能有相同长度超2的子串重复
function checkRepeat(stringPass){
	for(var i=0;i<stringPass.length-2;i++){
		var substr1=stringPass.slice(i,i+3);
		if(stringPass.indexOf(substr1)!=stringPass.lastIndexOf(substr1)){
			return false;
		}

	}
	return true;
	
}

console.log(checkRepeat('021$bc9000'));
console.log(checkCharkinds('021$bc9000'));

var line=['021Abc9000','021Abc9Abc1','021ABC9000','021$bc9000'];
for(var i=0;i<line.length;i++){
	if(checkLength(line[i])&&checkCharkinds(line[i])&&checkRepeat(line[i])){
		console.log('OK');
	}else{
		console.log('NG');
	}
	

}



var str11='YUANzhi1987';
var res=[]
for(var i=0;i<str11.length;i++){
	//处理数字
	if(str11[i]>='0'&&str11[i]<='9'){
		res[i]=str11[i];
		continue;
	}
	//处理大写字母

	else if(str11[i]>='A'&&str11[i]<='Z'){
		var t=str11[i].toLowerCase();
			if(t=='z'){
				res[i]='a';
			}else{
				res[i]=String.fromCharCode(t.charCodeAt()+1);	
			}
		
		continue;
	
	}
	//处理小写字母
	
	else if(str11[i]>='a'&&str11[i]<='c'){
                    res[i]='2';
                    continue;
                }else if(str11[i]>='d'&&str11[i]<='f'){
                    res[i]='3';
                    continue;
                }else if(str11[i]>='g'&&str11[i]<='i'){
                    res[i]='4';
                    continue;
                }else if(str11[i]>='j'&&str11[i]<='l'){
                    res[i]='5';
                    continue;
                }else if(str11[i]>='m'&&str11[i]<='o'){
                    res[i]='6';
                    continue;
                }else if(str11[i]>='p'&&str11[i]<='s'){
                    res[i]='7';
                    continue;
                }else if(str11[i]>='t'&&str11[i]<='v'){
                    res[i]='8';
                    continue;
                }else if(str11[i]>='w'&&str11[i]<='z'){
                    res[i]='9';
                    continue;
                }	
			

	  

	
}
console.log(res.join(''));
// 	//字母转换对应ascii
// console.log(str11[i].charCodeAt());
// //ascii码转换对应字母
// console.log(String.fromCharCode(num1));
// var tt='Y'
// function strTO(str){
// 	if(str>='A'&&str<='Z'){
// 		var t=str.toLowerCase();
// 			if(t=='z'){
// 				str='a';
// 			}else{
// 				str=String.fromCharCode(t.charCodeAt()+1);	
// 			}
	
// 	}
// 	return str;
// }
// console.log(strTO(tt));

var arr1=['1','2','3','2','3','2','4','2']
for(var i=0;i<arr1.length;i++){
	console.log(arr1[i]/2);
	
}


var str2='abeeecdd'
arr2=str2.split('');
//reduce求出每个字符对应的个数
var result=arr2.reduce(function(allString,name){
	if(name in allString){
		allString[name]++;
	}
	else{
		allString[name]=1;
	}
	return allString;
},{});
//排序取最小值
var arr=Object.keys(result).sort(function(v1,v2){
	return result[v1]-result[v2]
})
//将满足条件的最小字符放入一个数组
var arr3=[]
var min=result[arr[0]]
for(var i=0;i<arr.length;i++){
	if(result[arr[i]]===min){
	
		arr3.push(arr[i])
	}
}

//正则表达式删除最小的元素
for(var i=0;i<arr3.length;i++){
	var reg = new RegExp(arr3[i],"g");
    var a=str2.replace(reg,"");
	str2=a;
}
console.log(str2);



var arr = [6, 3, 6,3,0];
console.log(arr.sort());
var result=arr.sort().reduce(function(a,b){
	var length=a.length;
	if(length===0||a[length-1]!==b){
		a.push(b);

	}
	return a;

},[])

console.log(result);

var arr2=[ 0, 3, 6 ]
var arr3=[123, 456 ,786 ,453 ,46 ,7 ,5, 3 ,665, 453456, 745, 456, 786, 453, 123]
// var t=arr3[0].toString().split('')
// console.log(t);
// console.log(t.indexOf(arr2[1].toString()));

function dataClear(arr1,arr2){
//对数组R进行去重排序
var result=arr1.sort().reduce(function(a,b){
	var length=a.length;
	if(length===0||a[length-1]!==b){
		a.push(b);

	}
	return a;

},[])

// 遍历输入数组，检查输入数组的每个元素是是否包含规则数组中的数字i,如果包含则将输入数组元素位置和元素输出到最终结果中。

var res=[]
for(var j=0;j<result.length;j++){
	//计数
	var p=0;
	var temp=[]
	for(var i=0;i<arr3.length;i++){
		var t=arr3[i].toString().split('');
		//检查输入数组的每个元素是是否包含规则数组中的数字i,如果包含则将输入数组元素位置和元素输出到最终结果中
		if(t.indexOf(result[j].toString())!==-1){
			p++;
			temp.push(i);
			temp.push(arr3[i]);

	}	
		
	}
	if(temp.length){
		res.push(result[j]);
		res.push(p);
		for(var i=0;i<temp.length;i++){
			res.push(temp[i])
		}	


	}	

}

res.unshift(res.length)
return res;


}

var arr5=['6', '3', '6','3','0'];
var arr6=[123, 456 ,786 ,453 ,46 ,7 ,5, 3 ,665, 453456, 745, 456, 786, 453, 123]
var arr7=dataClear(arr5,arr6)
console.log(arr7.toString().replace(/,/g,' '));





var str='A Famous Saying: Much Ado About Nothing (2012/8).'

var arr=str.match(/[a-zA-Z]/g);
var t=str.split('')
for(i=0;i<arr.length;i++){
        for(j=0;j<arr.length-1-i;j++){
            if(arr[j].toUpperCase()>arr[j+1].toUpperCase()){
                tmp=arr[j];
                arr[j]=arr[j+1];
                arr[j+1]=tmp;
            }
        }
    }

var count=-1;
var result=t.map(function(item){
	if(/[a-zA-Z]/.test(item)){
		count++;
		return arr[count];

	}else{
		return item;
	}
})

console.log(result.join(''));




var a=['abc','bca','cab']

var t='abc';

for(var j=0;j<a.length;j++){
	if(a[j]!==t&&a[j].split('').sort().toString().replace(/,/g,'')==t)
	console.log(a[j]);
}



var strBro='473 bb daccb caddd bddc c baa adb ad abbcb cdaa abab a abcc ddcbd cadcc cdacd aaa a b acccd bbb dacc cc acbdd bcbb ba bacaa adda acd aaad d ab acac bc dabab abcd aacba aba daa bb ad cddab a bbaa aacad cdac acbcc cada bacd adcad cdadc bcbcc aa b acd cbaac ddcd ccb dac a dac adbcb bcda dda a ab ca dd d abd a dbb ccabd bdddd abd adc aaa baccb ccdcd a da c cadc dcdbd d aa bb a cac c ad adb ca cdcc cadd dddca d cba cb caab caa dd cd bca abc cdaa cdb bad dad bda d ddbc dab baaa adaac b a dbccd bd b bdad cdacd baa ac ddcad d bb acc aa cd cbdbb bbbcb a cc aacc c aadc dbcd a bca dd abbb ccdcd ccd ab d a a dadcd dbd bcaa c cda b ddab caaaa cdcdb b acbc ccaa dabca dcd b ba dbcc da bdbcc ab abaca bb cddc caca da dadba accdd bdac dbcd bcbbd ab bd ccb ddaa aa b b d bddd cabac aaba ab ccdb db abbd ada bdadb c abba dd cdb bca cccda badba abaa ac aabad db ccbad bddd ada dba acba b bc dd bbbbd cc cbdd cd abcaa bb ddaca acadb bbbb bddcc bdada aaa bcbda c aaa aadd cdddc adb cdbab c cbca bb aacab acdb bbdab b acbda cbdcd bda bacdc db d adcbd bccc c aaa cdd bdcd bac a aaab ddbb cd ccdbb addcc cdc c ca baadc addba dbdbd dba bbdda bcb c cdad aacac dcada cb aaad a cccab caca aad bbb dd b babbb cba bdaca db bacd bc bcbda cdda bcccd bdcda bdbcd adb cbcb a c bacba abbb adab adab b b d bca badbc baa cdb b abc aabb b d c cdab cacda d cdcda adcdc bcc bbccd b adb caba cbaaa aadb dcc add bcac bacbd bb a b c cabaa c caad c aa bcc ccab ddc dadca cdcba aaba dabbd dcb a bddb bb a c c cbc ccd dd a cabbb b caadb cb dca cbb ddaa bcadc dab a bbda cd bc ccad bbd ab c acddd cdd dbbbb daaab abbb cabc add ca caa bbbb dcab daaaa baca dcd ccacb ba bddaa acac dbcc bcc cbbcc b abba daa dbab bcca ba aa d dcdc d dcaa cbcda bd b ccbcb baa dcacd d c cbda baba d abb c cbdc da dbbb cd aabc dadc b a ddb c ddd ccdc ccd cba dbaac dcccd ddbac dbbdd bad bcdd cb dac dccd d a acdd d c cb b bcbb c a aca bcba d d bbdbc d c dabad ccca dc adb ddb dcdd dba ad ddaba c ac ddac bbbd cd a dacbb 1 '
var m,n;
var dic=[];
var word='';
//判断两个词是否是兄弟
function isBrother(a,b){
	
		if(a!==b&&a.split('').sort().join('')===b.split('').sort().join('')){
			return true;
		}else{
			return false;
		}


}
var m=parseInt(strBro.split(' ')[0]);
var dic=strBro.split(' ').slice(1,m+1);
var n=parseInt(strBro.split(' ')[m+2]);
var word=strBro.split(' ')[m+1];
var brothers=[]
for(var i=0;i<dic.length;i++){
	if(isBrother(dic[i],word)){
		brothers.push(dic[i]);
	}

}
//将兄弟单词按照字典顺序进行排序
brothers.sort();
//第一行输出兄弟单词个数
console.log(brothers.length);
//输出指定位数兄弟单词
if(brothers[n-1]){
	console.log(brothers[n-1]);

}



var line='$bo*y gi!r#l #';
var t=line.match(/[a-zA-Z]/g);
console.log(t);
var cur=-1;
var p=line.split('')
console.log(p)
var result=p.map(function(item){
	if(/[a-zA-Z]/.test(item)){
		cur++;
		return t[cur];

	}else{
		return ' ';
	}

})
var str=''
var tt=result.join('')
var ttt=tt.split(' ').reverse()
console.log(ttt);
for(var i=0;i<ttt.length;i++){
	if(ttt[i]!==''){
		str=str+ttt[i]+' '

	}

}
console.log(str.slice(0,str.length-1));


// var t=line.split(' ').reverse();
// var str=' ';
// console.log(t.join(' '));
// for(var i=0;i<t.length;i++){
//     str+=t[i];
// }
// console.log(str)

var readline=require("readline");
var r1=readline.createInterface({
    input:process.stdin,
    output:process.stdout
});
r1.on("line",function(line){
    line=line.trim();
    var arr=line.split(' ');
    var result=maxNum(arr[0],arr[1]);
    arr=[];
    console.log(result);
})
function maxNum(num1,num2){
    var temp=Math.max(num1,num2);
    var tmp=Math.min(num1,num2);
    var i;
    while(temp%tmp!=0){
        i=temp%tmp;
        temp=tmp;
        tmp=i;
    }
    return num1*num2/tmp;}





var i=216;
var num=parseFloat(i);
var err=0.0001;
temp=num;
while(Math.abs(temp*temp*temp-num)>err){
	temp=temp-(temp*temp*temp-num)/(3*temp*temp);

}
console.log(temp.toFixed(1));


var t1='I am a student'
var t2=t1.split(' ').reverse();
console.log(t2);
var t3=[]
for(var i=0;i<t2.length;i++){
	t4=t2[i].split('').reverse().join('')
	t3.push(t4);
}
console.log(t3.join(' '));



var arr2=[-13,-4,-7,2,3,4]
var cout=0,count=0,sum=0;
for(var i=0;i<arr2.length;i++){
	if(arr2[i]<0){
		cout++;
	}else{		
			count++;
			sum+=parseInt(arr2[i]);		
	}
}

var ppp=sum/count
console.log(cout);
console.log(ppp.toFixed(1));





var str='00245'
var sb=''
var a=str.length%8

if(a!=0){
	for(var i=0;i<8-a;i++){
		sb=sb+'0'
	}
}
var str=str+sb;
// console.log(str);
while(str.length>=8){
	console.log(str.slice(0,8))
	str=str.slice(8);
}



q=["8hs1kb6tdk7y2395r0kpg54", '8wilq1o25o1t53q4so7jy8', 'm0cp0v7r8dw5bvg' ,'70gvxq902rq9c4mu35udxki1v' ,'eliec' ,'smi4zt','gl7vq4z3r0laizvqme8h2tlbh843x' ]
 for(var j=0;j<q.length;j++){
        var sb=''
        console.log(typeof q[j]);
        var a=q[j].length%8
        if(a!==0){
	        for(var i=0;i<8-a;i++){
		        sb=sb+'0'
	}
        }
        q[j]=q[j]+sb;
// console.log(str);
    while(q[j].length>=8){
	    console.log(q[j].slice(0,8))
	    q[j]=q[j].slice(8);
}
        
    }




var readline = require('readline');

rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

var num = 0;
var inputs = [];
rl.on('line', function(data) {
    if(num == 0) {
        num = Number(data.trim());
    } else {
        inputs.push(data.trim());
        if(num == inputs.length) {
            deal(inputs);
            num = 0;
        }
    }
});

function deal(inputs){
    for(var j=0;j<inputs.length;j++){
        var sb=''
        var a=inputs[j].length%8
        if(a!==0){
	        for(var i=0;i<8-a;i++){
		        sb=sb+'0'
	}
        }
        inputs[j]=inputs[j]+sb;
// console.log(str);
    while(inputs[j].length>=8){
	    console.log(inputs[j].slice(0,8))
	    inputs[j]=inputs[j].slice(8);
}
        
    }
}



var a=[ '186',
  '13',
  '322',
  '264',
  '328',
  '110',
  '120',
  '73',
  '20',
  '35',
  '240',
  '97',
  '150',
  '221',
  '284',
  '324',
  '46',
  '219',
  '239',
  '284',
  '128',
  '251',
  '298',
  '319',
  '304',
  '36',
  '144',
  '236',
  '163',
  '122' ]
  console.log(a.length);
var dp=[];
dp[0]=1;
for(var i=1;i<30;i++){
	dp[i]=1;
	for(var j=0;j<i;j++){
		if(a[i]>a[j]){
			if(dp[i]<dp[j]+1){
				dp[i]=dp[j]+1;
			}
		}
	}
}
console.log(dp);
var max=dp[0];
console.log(dp.length);
for(var k=1;k<dp.length;k++){
	if(max<dp[k]){
		max=dp[k]

	}

}
console.log(max);



var x=10;

function cals(myNum) {

            return myNum+x;
        }


 console.log(cals(7));



 function Foo(){
     var i=0;
     return function(){
         console.log(i++);;
     }
}
var f1=Foo(),
f2=Foo();
f1();
f1();
f2();


// for(var i=0;i<4;i++){
// 	setTimeout(function(){
// 		console.log(i);
// 	}, 0);
// }



// for(var i=0;i<4;i++){
// 	(function(i){
// 		setTimeout(function(){
// 			console.log(i);

// 		}, 0);

// 	})(i)
// }

var person={fname:"John",lname:"Doe",age:25};
var txt="";
for (x in person)
{
  console.log(x);
}
var x=0;
switch(++x)
{
case 0: ++x;
case 1: ++x;
case 2: ++x;
}
console.log(x);


var obj = {"key":"1","value":"2"};
var newObj = obj;
newObj.value += obj.key;
console.log(obj.value);
console.log(isNaN('rer'));

var  arr=[1,2,3,4,5,6,7,8,0]
console.log(arr.slice(2));
console.log(arr.slice(0,-1));

var arr2=[25,76,9376]
for(var i=0;i<arr2.length;i++){
	var t=arr2[i]*arr2[i];
	var str0=t.toString();
	var str1=t.toString().length;
	var str2=arr2[i].toString();

	// console.log(str1+'=='+str2);
	// console.log(str0.slice(str1-str2.length)==arr2[i].toString());

	if(str0.slice(str1-str2.length)==arr2[i].toString()){
		console.log(arr2[i]);
	}
}

var count=0;
for(var i=0;i<2000;i++){
	var t=i*i;
	var str0=t.toString();
	var str1=t.toString().length;
	var str2=i.toString();

	if(str0.slice(str1-str2.length)==i.toString()){
		count++;
	}


}
console.log(count);

arr2=[1,2,3,4,5]
var cout=0,sum=0,count=0;
function jishu(arr2) {
    for(var i=0;i<arr2.length;i++){
        if(arr2[i]<0){
            cout++;
        }else{
            count++;
            sum+=parseInt(arr2[i]);
        }
    }

    var ppp=sum/parseInt(count);
    console.log(cout+' '+ppp.toFixed(1));

 
}

jishu(arr2)




var bb = 1;
function aa(bb) {
    bb = 2;
    console.log(bb);
};
aa(bb);
console.log(bb);


var a = [1,4,5,2,9];
console.log(Math.max.apply(null,a));




var digitUppercase = function(n) {
    var fraction = ['角', '分'];
    var digit = [
        '零', '壹', '贰', '叁', '肆',
        '伍', '陆', '柒', '捌', '玖'
    ];
    var unit = [
        ['元', '万', '亿'],
        ['', '拾', '佰', '仟']
    ];
    var head = n < 0 ? '欠' : '';
    n = Math.abs(n);
    var s = '';
    for (var i = 0; i < fraction.length; i++) {
        s += (digit[Math.floor(n * 10 * Math.pow(10, i)) % 10] + fraction[i]).replace(/零./, '');
    }
    s = s || '整';
    n = Math.floor(n);
    for (var i = 0; i < unit[0].length && n > 0; i++) {
        var p = '';
        for (var j = 0; j < unit[1].length && n > 0; j++) {
            p = digit[n % 10] + unit[1][j] + p;
            n = Math.floor(n / 10);
        }
        s = p.replace(/(零.)*零$/, '').replace(/^$/, '零') + unit[0][i] + s;
    }
    return head + s.replace(/(零.)*零元/, '元')
        .replace(/(零.)+/g, '零')
        .replace(/^整$/, '零元整');
};
  
console.log(digitUppercase(151121.15)); //柒仟陆佰捌拾贰元壹分
console.log(digitUppercase(7682));  //柒仟陆佰捌拾贰元整
console.log(digitUppercase(951434677682.00)); //玖仟伍佰壹拾肆亿叁仟肆佰陆拾柒万柒仟陆佰捌拾贰元整



//java题目0-1级
/*
思路：参考：ld1230
1.接收数据，分别计算被5整出，被3整出的总和，以及将剩下数据保存起来
2.判断是否有可能存在解，如果没有，直接输出false
3.若可能的话，将问题转化成，利用剩下的数据进行加减运算，得到一个数，这个数的绝对值和sum5-sum3的绝对值相同
即为true，用递归的方式进行求解。
*/

// function judge(i,n,irest[i],sum1,sum2){
// 	if(i==n)//当所有元素分配完成
// 		return Math.abs(sum1)==Math.abs(sum2);
// 	//判断是否存在一个接
// 	return judge(i+1,n,irest,sum+irest[i],sum2)||judge(i+1,n,irest,sum1-irest[i],sum2)//递归
// }
// var arr=[1,5,-5,1]

// var sum=0,sum5=0,sum3=0,sumRest=0;
// var irest=[];//用于判断是否存在解
// for(var i=0;i<arr.length;i++){
// 	sum+=arr[i]
// 	if(arr[i]%5==0){
// 		sum5+=arr[i];
// 	}else if(arr[i]%3==0){
// 		sum3+=arr[i];

// 	}else{
// 		irest.push(arr[i]);
// 		sumRest=+arr[i];
// 	}
// }
// //如果和不为偶数，则不可能存在解
// if(sum%2!==0){
// 	console.log(false);
// }else{
// 	sum=Math.abs(sum5-sum3);
// 	flag=judge(0,irest.length,irest,0,sum);
// 	if(flag){
// 		console.log(true);
// 	}else{
// 		console.log(false);
// 	}
// }


//字符串中查找最长数字字符串
var str='8749r6k4nugdm04p5b1yhegi8hiq3937';
var max=0;
 ss='';
 out='';
 var arr=[]
console.log(str.length);
for(var i=0;i<str.length;i++){
	if(str[i]>='0'&&str[i]<='9'){
		ss+=str[i];
		while(str[i+1]>='0'&&str[i+1]<='9'){
			i++;
			ss+=str[i];				
		}	

		arr.push(ss);
		ss='';	
				

	}	

}
var result=arr.reverse().sort(function(a,b){
	return b.length-a.length;
})
console.log(result);
var str1=''
for(var i=result.length-1;i>=0;i--){
	if(result[i].length==result[0].length){
		str1+=result[i]
	}
}
console.log(str1+','+result[0].length);
console.log('Value is ' + (val != '0') ? 'define' : 'undefine');



var n=100;
for(var x=0;x<100/5;x++){
	var y=(200-14*x)/8;
	var z=100-y-z;
	if(y=parseInt(y)&&y>=0&&z>=0){
		console.log(x+' '+y+' '+z);
	}
}