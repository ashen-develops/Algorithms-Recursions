//reverse string as an input
function reverse(str) {
  if (str === ""){
    return "";
  }
  const theReverse = reverse(str.substr(1)) + str.charAt(0);
  return theReverse
}
reverse("")

// //nth Triangular Number
// function triangulate(n){
  
// }

// //String Splitter
// function split(str){

// }

// //Fibonacci
// function fibonize(num){

// }











