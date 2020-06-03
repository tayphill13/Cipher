$(document).ready(function() {
let capital = function(sentence) {
  return ((sentence.charAt(0)+ sentence.charAt(sentence.length-1)).toUpperCase());
}

let reverseString = function(str) {
  let splitString = str.split("");
  let reverseArray = splitString.reverse();
  let joinArray = reverseArray.join("");
  return joinArray;
}

let combine = function(sentence) {
  let newSentence = reverseString(capital(sentence));
  return sentence + newSentence;
}

let charAtDivideByTwo = function(sentence) {
  let divideByTwoChar = sentence.charAt(Math.floor(sentence.length/2));
  return divideByTwoChar + combine(sentence);
}
$(".output").text(reverseString(charAtDivideByTwo(sentence)));

});
let sentence = prompt("Enter a sentence:");


