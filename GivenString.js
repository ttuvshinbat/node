let string = "something102asdfkj1928948"
// string nertei number + string ees dan number bolon dam string iig salgdaaj avlaa
// isNAN punctian ni number esehiig shalgana
// charAT()  punktion ni neg burchilen shalgana
number = ""
for(let i = 0 ; i < string.length ; i++ ){
    if(!isNaN(string[i])){
        number = number + string[i]
    }
     
}
console.log(number)
for(let i = 0 ; i < string.length ; i++ ){
    if(!isNaN(string.charAt(i))){
        number += string.charAt(i)
    }
     
}
console.log(number)