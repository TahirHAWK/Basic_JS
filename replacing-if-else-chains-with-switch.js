function chainToSwitch(val) {
  var answer = "";
  // Only change code below this line

switch(val){
  case 'bob':
    answer = "Marley";
  return answer;
  break;

  case 42:
    answer = "The Answer";
  return answer;
  break;

  case 1:
    answer = "There is no #1";
  return answer;
    break;

  case 99:
    answer = "Missed me by this much!";
  return answer;
  break;

  case 7:
    answer = "Ate Nine";
  return answer;
  break;


}



  // Only change code above this line
  return answer;
}

console.log(chainToSwitch('bob'))