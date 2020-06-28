const palindrome = require('./index');

test('plaindrome function is defined', () => {
    expect(typeof palindrome).toEqual('function');
})

test('"aba" is plaindrom', () => {
    expect(palindrome('aba')).toBeTruthy();
})

test('" abc" is not a plaindrom', () => {
    expect(palindrome('aba ')).toBeFalsy();
})

test('"aba " is not a palindrome', () => {
    expect(palindrome('aba ')).toBeFalsy();
})

test('"greetings" is not a palindrome', () => {
    expect(palindrome('greetings')).toBeFalsy();
}) 

test('"1000001" is a palindrome', () => {
    expect(palindrome('1000001')).toBeTruthy();
})

test('"Fish hsif" is not a palindrome', () => {
    expect(palindrome('Fish hsif')).toBeFalsy();
})

test('"pennep" is palindrome', () =>{
    expect(palindrome('pennep')).toBeTruthy();
})