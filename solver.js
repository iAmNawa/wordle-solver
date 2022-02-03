let correct_word = 'spite'
let start_word ='scram'
let found = false
const wordList = require("./wordsList")

let correctArr = [0,0,0,0,0]

for (var i = 0; i < correctArr.length; i++) {
  if (correct_word[i] === start_word[i]) {
    correctArr[i] = start_word[i]
  }
}

console.log(correctArr)

let possibleWords = []

for (var i = 0; i < correctArr.length; i++) {
  if (correctArr[i] == true) {
    for (var j = 0; j < wordList.length; j++) {
      if (wordList[j][i] === correct_word[i]) {
        possibleWords.push(wordList[j])
      }
    }
  }
}

let unique = [...new Set(possibleWords)];

console.log(unique)
console.log(unique.length)
