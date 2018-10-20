function checkPalindrom(str) {  
    return str == str.split('').reverse().join('');
}

t = '121343'
console.log(checkPalindrom(t))