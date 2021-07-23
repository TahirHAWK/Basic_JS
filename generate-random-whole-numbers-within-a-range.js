function randomRange(myMin, myMax) {
  // Only change code below this line
  let random = Math.floor(Math.random()* (myMax - myMin + 1 )) + myMin

  return random;
  // Only change code above this line
}

console.log(randomRange(20, 30))