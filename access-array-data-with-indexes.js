var myArray = [50,60,70];
// Only change code below this line
var myArray = [["this is a string", 45], ['this is another', ['this is third nest of multiple nests', 99]]];

for(let x = 0; x < myArray[1][1][0].length;){

console.log(myArray[1][1][0][x] ) // accessing individual string while using nested arrays.
 x++
}



var myData = myArray[0];
console.log(myData)