var count = 0;

function cc(card) {
  // Only change code below this line
  let countPlus = [2, 3, 4, 5, 6]
  let countZero = [7, 8, 9]
  let countMinus = [10, 'J', 'Q', 'K', 'A']
  // console.log(countPlus.length)
for(let i=0; i< countPlus.length; i++){
  if(card == countPlus[i]){
    count++;
    // console.log(count, i)
    // break;
  }
    // console.log(count, i, 'value not here, countplus')
}

for(let i=0; i< countZero.length; i++){
  if(card == countZero[i]){
    count= count+0;
    // console.log(count, i)
    // break;
  }
    // console.log(count, i, 'value not here, countzero')
}
for(let i=0; i< countMinus.length; i++){
  if(card == countMinus[i]){
    count--;
    // console.log(count, i)
    // break;
  }
    // console.log(count, i, 'value not here, countMinus')

   
}

let holdBet = 'Hold'

if (count > 0){
 holdBet = 'Bet'
}

console.log(count, holdBet)

  return count+ ' '+ holdBet;
  // Only change code above this line
}
cc(3);
 cc(2);
 cc('A'); cc(10); cc('K');