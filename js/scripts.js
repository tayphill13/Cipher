let capital = function(sentence) {
  return ((sentence.charAt(0)+ sentence.charAt(sentence.length-1)).toUpperCase());
}

let reverseString = function(str) {
  let splitString = str.split("");
  let reverseArray = splitString.reverse();
  let joinArray = reverseArray.join("");
  return joinArray;
}

let sentence = prompt("Enter a sentence:");

console.log(reverseString(capital(sentence)));

