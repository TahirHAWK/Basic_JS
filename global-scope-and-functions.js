// Declare the myGlobal variable below this line
var myGlobal = 10

function fun1() {
  // Assign 5 to oopsGlobal Here
  oopsGlobal = 5
  // due to not declaring it with 'var' it is stated as global by default
}

// Only change code above this line

function fun2() {
  var output = "";
  if (typeof myGlobal != "undefined") {
    output += "myGlobal: " + myGlobal;
  }
  if (typeof oopsGlobal != "undefined") {
    output += " oopsGlobal: " + oopsGlobal;
  }
  console.log(output);
}