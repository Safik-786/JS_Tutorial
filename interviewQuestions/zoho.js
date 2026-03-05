function getWordAndNumberObject(word) {
    let outputWord = "";
    let outputNumber = "";

    for (let ch of word) {
        if (ch >= '0' && ch <= '9') {
            outputNumber += ch;
        } else {
            outputWord += ch;
        }
    }

    return {
        word: outputWord,
        number: Number(outputNumber)
    };
}



const inp1 = "t4o j7oin 6WonderBiz I0 Technolog9ies wan3t";

const result = inp1
    .split(" ")
    .map(getWordAndNumberObject)
    .sort((a, b) => a.number - b.number)
    .map(obj => obj.word)
    .join(" ");

console.log(result);
