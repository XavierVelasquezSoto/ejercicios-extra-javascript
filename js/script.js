//1- Escribe una función que reciba un string y un prefijo, y verifique si el string comienza con ese prefijo. Por ejemplo, si enviamos subterráneo y sub la función imprimirá true.

function hasPrefix(word, prefix){
    /* console.log(word.starts(prefix)); */
    return word.startsWith(prefix);
    
}

const result = hasPrefix("subterraneo", "sub");
console.log(result);
const result2 = hasPrefix("toalla", "asd")
console.log(result2)


//2- Escribe una función que reciba un string y un sufijo, y verifique si el string termina con ese sufijo.

function hasSuffix(word,suffix){

    console.log(word.endsWith(suffix))

}

hasSuffix("contador", "dor")

/* 
function hasSufix(word, sufix){
    return word.endsWith(sufix);
}

const result = hasSufix('dificilmente', 'mente');
console.log(result);

*/

//3- Escribe una función que reciba un string y un índice, y devuelva el carácter en esa posición.

function characterIndex(word, index){
    let letter = word.charAt(index)

    return letter
}

const totalText = characterIndex("tela",1)
console.log(totalText)

//4- Escribe una función que reciba dos palabras y las imprima unidas por un guión.

function united(word1, word2){

    console.log(word1 + '-' + word2);
}

united("Josefine", "Macarena");

//5- Escribe una función que reciba 2 números y una letra e imprima todas las combinaciones posibles con esos datos.

function numbers(numberA, numberB, word){
     
    console.log()
}

numbers(4,10,"a")

function mixLettersAndNumbers(word, num1, num2){
    console.log(word + "" + num1 + "" + num2);
    console.log(word + "" + num2 + "" + num1);
    console.log(num1 + "" + num2 + "" + word);
    console.log(num1 + "" + word + "" + num2);
    console.log(num2 + "" + word + "" + num2);
    console.log(num2 + "" + num1 + "" + word);

}

mixLettersAndNumbers("a",2,4)

/* 
    function mixLetterAndNumbers(word, num1, num2){
    console.log(`${word} ${num1} ${num2} - ${word} ${num1} ${num2}${word} ${num1} ${num2} - ${word} ${num1} ${num2} -${word} ${num1} ${num2}-${word} ${num1} ${num2}-${word} ${num1} ${num2}-${word} ${num1} ${num2}`)

}
*/


//6 - Escribe una función que reciba una palabra de 5 letras y te diga cuantas vocales y cuantas consonantes tiene. 
// VACA 3vocales y 2 consonantes




/* function contLetter(word){
    let numberOfVowels = 0
    let numberOfConsonants = 0

    if(word.charAt(0) === "a" || word.charAt(0) === "e"|| word.charAt(0) === "i"|| word.charAt(0) === "o"|| word.charAt(0) === "u"){
        numberOfVowels = numberOfVowels + 1;
    }else{
        numberOfConsonants = numberOfConsonants + 1;
    }
    if(word.charAt(1) === "a" || word.charAt(1) === "e"|| word.charAt(1) === "i"|| word.charAt(1) === "o"|| word.charAt(1) === "u"){
        numberOfVowels = numberOfVowels + 1;
    }else{
        numberOfConsonants = numberOfConsonants + 1;
    }
    if(word.charAt(2) === "a" || word.charAt(2) === "e"|| word.charAt(2) === "i"|| word.charAt(2) === "o"|| word.charAt(2) === "u"){
        numberOfVowels = numberOfVowels + 1;
    }else{
        numberOfConsonants = numberOfConsonants + 1;
    }
    if(word.charAt(3) === "a" || word.charAt(3) === "e"|| word.charAt(3) === "i"|| word.charAt(3) === "o"|| word.charAt(3) === "u"){
        numberOfVowels = numberOfVowels + 1;
    }else{
        numberOfConsonants = numberOfConsonants + 1;
    }
    if(word.charAt(4) === "a" || word.charAt(4) === "e"|| word.charAt(4) === "i"|| word.charAt(4) === "o"|| word.charAt(4) === "u"){
        numberOfVowels = numberOfVowels + 1;
    }else{
        numberOfConsonants = numberOfConsonants + 1;
    }

    console.log(`${word} tiene ${numberOfVowels} vocales y ${numberOfConsonants} consonantes`)
}

contLetter("adios") */


/* function contLetter(word){
    const vowels = "aeiouAEIOU"
    let numberOfVowels = 0;
    let numberOfConsonants = 0;

    if(vowels.includes(word.charAt(0))){
        numberOfVowels = numberOfVowels +1;
    } else {
        numberOfConsonants = numberOfConsonants +1;
    }
    if(vowels.includes(word.charAt(1))){
        numberOfVowels = numberOfVowels +1;
    } else {
        numberOfConsonants = numberOfConsonants +1;
    }

    if(vowels.includes(word.charAt(2))){
        numberOfVowels = numberOfVowels +1;
    } else {
        numberOfConsonants = numberOfConsonants +1;
    }
    if(vowels.includes(word.charAt(3))){
        numberOfVowels = numberOfVowels +1;
    } else {
        numberOfConsonants = numberOfConsonants +1;
    }
    if(vowels.includes(word.charAt(4))){
        numberOfVowels = numberOfVowels +1;
    } else {
        numberOfConsonants = numberOfConsonants +1;
    }

    console.log(`${word} tiene ${numberOfVowels} vocales y ${numberOfConsonants} consonantes`);

}

contLetter("adios"); */

function letterCounter(word) {
  const vowels = "aeiouAEIOU";
  let countVowels = 0;
  let countConsonants = 0;

  if (word.length === 5) {
    vowels.includes(word.charAt(0)) ? countVowels++ : countConsonants++;
    vowels.includes(word.charAt(1)) ? countVowels++ : countConsonants++;
    vowels.includes(word.charAt(2)) ? countVowels++ : countConsonants++;
    vowels.includes(word.charAt(3)) ? countVowels++ : countConsonants++;
    vowels.includes(word.charAt(4)) ? countVowels++ : countConsonant
vowels.includes(word.charAt(4)) ? countVowels++ : countConsonants++;

    return `La palabra ${word} tiene ${countVowels} vocales y ${countConsonants} consonantes`;
  }
  return "La palabra no tiene 5 letras";
}

console.log(letterCounter("Diego"));




// arrow function
const sunNumbers = (a,b) => {
    console.log(a+b);

}

sunNumbers(2,5);

const a = 6;
const b = 'hola';
const c = true;

const d = () => {};