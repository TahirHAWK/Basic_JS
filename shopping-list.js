var myList = [["condom", 20], ["vibrator", 1], ['dildo', 2], ['sex swing', 1], ['massage couch', 1]];

console.log('Item\t', '\tprice')
for( let x = 0; x< myList.length ; x++){
  if(myList[x][0].length< 7){
console.log(myList[x][0],'\t\t', myList[x][1])

  }else{

console.log(myList[x][0],'\t', myList[x][1])
  }

}