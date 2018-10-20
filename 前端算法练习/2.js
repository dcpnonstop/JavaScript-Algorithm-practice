// 数组去重

// 判断一个单词是否是回文
var str1 = 'abcdef'
var str2 = 'abcdcba'
function pal(str){
	return str.split('')== str.split('').reverse().join();
}
console.log(pal(str1));
console.log(pal(str2));