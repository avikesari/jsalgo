//-----Direction
//Given an interger, return  an integer that is reverse ordering of number
//----Example
// reverseInt(5) ==== 5
//reverseInt(51) === 15
//reverseInt(50) === 5
//reverseInt(-15) === -51
//reverseInt(-345) === -543
//reverseInt (-90) === -9


function reverseInt(n){
    let reversed = n
    .toString()
    .split('')
    .reverse()
    .join('');
    
    return Math.sign(n) * parseInt(reversed);
}

module.exports = reverseInt;

