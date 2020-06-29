//---Direction 
//Given a string return maximum number of character used
//--Example
//maxChar('abafagajasda') = 'a';
//maxChar('Hello 12314512316978111') = '1';
function maxChar(str){
    const charObj ={};
    let max = 0;
    let maxchar = '';
    for(let char of str){
        charObj[char] = charObj[char] + 1 || 1;
        
    }

    for(let char in charObj){
        if(charObj[char] > max){
            max = charObj[char];
            maxchar = char;
        }
    }
    return maxchar;
  
}

module.exports = maxChar;