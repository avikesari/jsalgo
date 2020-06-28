//-- Directions

//Given a string return true if the string is Palindrome
// or return false if it is not.
//Palindrome are the strings that forms the same words if it is reversed.
//* Do include spaces and punchuation in determining if the string is palindrome

//----Example
// palindrome('abcba') == 'abcba' //true
// palindrome('abcd') == dcba //false

//Method 2
function palindrome(str){
    return str.split('').every((char, index) => {
       return char === str[str.length - index - 1];
    });
}

module.exports = palindrome;

//Method 1
// function palindrome(str){
//     return str === str
//     .split('')
//     .reverse()
//     .join('');
// }