// //String Splitter
// function split(str, sep){
//   const idx = str.indexOf(sep);
//   if(idx == -1){
//     return [str];
//   }
//   return [str.slice(0, idx)].concat(split(str.slice(idx + sep.length), sep))
// }
// split("7a22a54", "a")

function strSplit(str, sep){
  if(str.length < 1) return '';
  
  const indexOfSeparator = str.indexOf(sep) === -1 ? str.length : str.indexOf(sep)
  
  const newValue = str.slice(0, indexOfSeparator)
  
  const stringAfterSeparator = str.slice(indexOfSeparator + 1, str.length)
  
  const otherValues = strSplit(stringAfterSeparator, sep)
  
  return [newValue, ...otherValues]
}
console.log(strSplit('02/20/2020', '/'))











