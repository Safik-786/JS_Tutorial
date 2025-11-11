let vowel= "aeiou"


let isVowel= (letter)=>{
    if (vowel.includes(letter)) {
        return true
    }

    return false
}

console.log(isVowel("c"));

