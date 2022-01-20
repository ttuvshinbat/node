// regular expreision 
let word = "something102asdfkj1928948zdf234u69506"
let pattern = ""
var numberPattern = /\d+/g;
  pattern =  word.match(numberPattern).join("")




console.log(pattern)