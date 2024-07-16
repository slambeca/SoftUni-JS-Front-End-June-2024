function checkForPalindromes(array=[]) {
    function isPalindrome(num=Number) {
        const str = num.toString();
        const reversedStr = str.split('').reverse().join('')
    
        return str === reversedStr;
    }

    for (let i = 0; i < array.length; i++) {
        const num = array[i];

        if (isPalindrome(num)) {
            console.log('true');
        } else {
            console.log('false');
        }
    }
}


checkForPalindromes([123,323,421,121]);
checkForPalindromes([32,2,232,1010]);
