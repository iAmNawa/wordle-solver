let correct_word = 'honey'
let start_word ='sitar'
let found = false
const data = require("./words.json")

for (var i = 0; i < data.length; i ++) {
    if (data[i] === word) {
        found = true
    }
}

console.log(found)