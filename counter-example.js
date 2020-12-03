function jumpSheep(sheep) {
  if (sheep === 0) {
    return console.log("All sheep counted");
  }
  console.log(sheep + ": sheep counted")
  jumpSheep(sheep - 1)
  
}

jumpSheep(5)












