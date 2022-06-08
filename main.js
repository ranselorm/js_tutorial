let Phrase = require("ransel-palindrome")
let string = prompt("Enter a string or word for palindrome testing")

let phrase = new Phrase(string)
if (phrase.palindrome()) {
    alert(`"${phrase.content}" is a palindrome`)
} else {
    alert(`"${phrase.content}" is not a palindrome`)
}