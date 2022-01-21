let correct_word = 'hinaz'
let start_word ='sotuz'
let found = false
const data = require("./words.json")

let correctArr = [0,0,0,0,0]

for (var i = 0; i < correctArr.length; i++) {
  if (correct_word[i] === start_word[i]) {
    correctArr[i] = 1
  }
}

console.log(correctArr)

let possibleWords = []

for (var i = 0; i < correctArr.length; i++) {
  if (correctArr[i] === 1) {
    for (var j = 0; j < data.length; j++) {
      if (data[j][i] === correct_word[i]) {
        possibleWords.push(data[j])
      }
    }
  }
}

let unique = [...new Set(possibleWords)];

console.log(unique)
console.log(unique.length)

/*for (var i = 0; i < data.length; i ++) {
    if (data[i] === word) {
        found = true
    }
}*/

//console.log(found)