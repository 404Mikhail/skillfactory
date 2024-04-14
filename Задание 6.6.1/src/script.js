function isPalindrome(str) {
    let strLen = str.length;
    let result = '';
    for (let i = 0; i < strLen; i++) {
        if (str[i] === str[strLen - 1 - i]) {
            result = 'Слово является палиндромом';
        } else {
            result = 'Слово не является палиндромом';
            return result;
        }
    }
    return result;
}

test = isPalindrome(prompt('Введите слово'));
console.log(test)