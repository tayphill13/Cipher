let capital = function(sentence) {
  return ((sentence.charAt(0)+ sentence.charAt(sentence.length-1)).toUpperCase());
}
let sentence = prompt("Enter a sentence:");

console.log(capital(sentence));

