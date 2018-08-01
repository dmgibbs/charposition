function getData(){
  return process.argv.slice(2);
}

function countLetters(list){
// return an object that is of the form of key , value
  var countList = Object.create(null);
  list.forEach(item => {countList[item] = countList[item] ? countList[item]+1 : 1});
  return countList;
}

function getRepeats(list,item){
  // Parses a list for occurrences of item. Stores the index of each occurrence.
  // returns a list of occurrences
  var i,locs = [];
  var myset = [];
  for (i=0; i<list.length;i++){
    if (list[i] === item){
      locs.push(i);
    }
  }
  return locs;
}

function charPosition(mylist){
  var res1 = mylist.map(item => getRepeats(mylist,item));
  return res1;
}
var tmp  = getData();
//var str1 = ['lighthouse', 'in', 'the', 'house' ];
var str2 = tmp.join(""); // join the input data, taking the array items and instead of commas use " "
//console.log('Input data: ',str2);
var res = str2.split('');  // turn the string into an array of letters.
//console.log('We now have : ',res);
console.log('Resulting locations : ', charPosition(res));
