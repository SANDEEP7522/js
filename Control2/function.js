// function calculateSquare(num){
//     // logic to calculate squre of a number
//     let squaareValue = num * num;
//     // return the output of the squre of the  squre value
//     return squaareValue;
// }

// let result = calculateSquare(9);
// console.log(result);



// function calculateSquare(num){
//     // logic to calculate squre of a number
//     let squaareValue = num * num;
//   console.log(squaareValue); // insted of return we did a long 
// }

// calculateSquare(9);
// calculateSquare(5);


// parameter and argument

/*
function calculateSquare(num){
    // num is a parameter
    // logic to calculate squre of a number
    let squaareValue = num * num;
  console.log(squaareValue); // insted of return we did a long 
}

calculateSquare(9);   // here 9 is the argument 
calculateSquare(5);  // here 5 is the argument
*/
// write   a function to calculate three munber passed as on arument. retun the as output.

// function calculateSum(num){
//     let addValue = num + num + num;
//     console.log(addValue);
// }
// calculateSum(3);

// OR
/*
function addNumbers(a, b, c){
    // const sumValue = a + b + c;
    // return sumValue;

    return a + b + c;  // it is also work short code
}
console.log(addNumbers(10, 20, 30))
*/
// write a function to calculate sum of some number passed as an argument.Return the sum as output.
  

function addNumbers() {
// no parameter pass in the function
   console.log(arguments.length);     
}

  addNumbers( 9, 1, 2);
  addNumbers( 8, 10, 12);
  addNumbers( 10, 20, 30);
  addNumbers();









