// //Fibonacci
// function fibonize(num){
//   //base case
//   if(num <= 0) {
//     return 0;
//   }
//   //base case
//   if(num <= 2) {
//     return 1;
//   }
//   //recursive case
//   return fibonize(num - 1) + fibonize(num - 2)
// }
// fibonize(7)

function fib(n){
  if (n === 0) return 0;
  if (n === 1) return 1;
  return fib(n - 1) + fib(n - 2)
}
fib(7)











