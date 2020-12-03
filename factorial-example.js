//Factorial
// Write a recursive function that finds the factorial of a given number. The factorial of a number can be found by multiplying that number by each number between itself and 1. For example, the factorial of 5 is 5 * 4 * 3 * 2 * 1 = 120.

function factorial(n) {
  //base case - when n is equal to 0, we stop the recursion
  if(n === 0){
    return 1;
  }
  //Recursive Case
  //It will run for all other conditions except when n is equal to 0
  return n * factorial(n - 1);
}
factorial(5)










