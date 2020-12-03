
function powerCalculator(baseInt, exponent){
  if (exponent < 0){
    return console.log("please be positive")
  }
  if (exponent === 0){
    return 1;
  }
  else {
    return baseInt * powerCalculator(baseInt, exponent - 1)
  }

}
powerCalculator(10, 2)











