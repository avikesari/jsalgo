//--- Direction

//Given a string, return a new string with the reversed
//order of characters
//---Examples
// reverse('apple') === 'elppa'
// reverse('hello') === 'olleh'
// reverse('Greetings!') === '!sgniteerG'



//Method 3
function reverse(str){
     return str.split('').reduce((reversed, character) => {
        return character + reversed;
     }, '')

     return reversed;
}

module.exports = reverse;

//Method1
// function reverse(str){
    
//     return str.split("").reverse().join("");
// }

//Method 2
// function reverse(str){
//     let reversed = '';
//     for (let character of str){
//         reversed = character + reversed;
//     }

//     return reversed;
// }