//---Direction
//Write a function that console logs numbers 1 to n.
//But the multiplies of 3 print "fizz" and multiplies of 5
//prints "buzz". But the multiplies of 3 and 5 prints "fizzbuzz"
//---Example
//fizzbuzz(5)
//1
//2
//fizz
//4
//buzz

function fizzbuzz(n){
    for(let i = 1; i <= n; i++){
        if(i % 3 === 0 && i % 5 === 0){
            console.log('fizzbuzz');
        }
        else if(i % 3 === 0){
            console.log('fizz');
        }else if(i % 5 === 0){
            console.log('buzz');
        }else{
            console.log(i);
        }         
    }
}

module.exports = fizzbuzz;