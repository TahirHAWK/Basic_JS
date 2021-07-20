// Setup
var recordCollection = {
  2548: {
    albumTitle: 'Slippery When Wet',
    artist: 'Bon Jovi',
    tracks: ['Let It Rock', 'You Give Love a Bad Name']
  },
  2468: {
    albumTitle: '1999',
    artist: 'Prince',
    tracks: ['1999', 'Little Red Corvette']
  },
  1245: {
    artist: 'Robert Palmer',
    tracks: []
  },
  5439: {
    albumTitle: 'ABBA Gold',
   
  }
};

// Only change code below this line
function updateRecords(records, id, prop, value) {
  let checkIdProp = records[id].hasOwnProperty(['tracks'])
  let recordId = records[id]
  if (prop !== 'tracks' && value !== '' ) {
  records[id][prop] = value
 } else if (prop === 'tracks' && checkIdProp === false){
  //  create empty array and add value to it
 records[id][prop] = [value]
  
 } else if(prop === "tracks" && value !== ''){
//  add value to the end of the album's existing tracks array.   
   records[id][prop].push(value);
 } else if(value === ''){
  //  delete the given prop property from the album.
  delete records[id][prop]
 }




// console.log(propFromObject, recordId)
  return records;
}

// console.log(updateRecords(recordCollection, 5439, 'tracks', 'ABBAD'))
// console.log(updateRecords(recordCollection, 2468, 'artist', ''))
console.log(updateRecords(recordCollection, 5439, "tracks", "Take a Chance on Me"))
