const randNo=parseInt(Math.random()*100 +1);
const submit=document.querySelector('#sbmt')
const userInput=document.querySelector('#guessfield')
const guessSlot=document.querySelector('.guesses')          // print previous slot
const remaining=document.querySelector('.lastresult')
const lowOrHi=document.querySelector('.lowOrHigh')

const p = document.createElement('p')

let prevGuess =[] 
let numGuess = 1 ;
let playGame = true ;

if (playGame) {
    submit.addEventListener('click' , function(e){
        e.preventDefault();             // it will prevent action="" of form to move to server
        const guess =parseInt(userInput.value)
        console.log(guess);
        validateGuess(guess)
    })
    
}
function validateGuess(guess){  //  it check value with in hundred or not
    if(isNaN(guess) || guess <1){
        alert("Please enter a valid number")
    }
    if (guess>100) {
        alert("Please enter a number less than 100")
    }
    else{
        prevGuess.push(guess)
    }
    if (numGuess===11) {
        displayGuess(guess)
        displayMessage(`Game Over ! Random number was ${randNo}`)
        endGame()
    }
    else{
        displayGuess(guess)
        checkGuess(guess)
    }
}
function checkGuess(guess){     // it check whether guess number is equal to random number or not
    if (guess ===randNo) {
        displayMessage('Congratulation! you guessed it right')
        endGame()
    }else if (guess<randNo) {
        displayMessage('Number is Too low')
    }
    else if (guess>randNo) {
        displayMessage('Number is Too High')
    }
}
function displayGuess(guess){    //it clean values , update previous array and remaining
    userInput.value=''
    guessSlot.innerHTML+= `${guess}`
    numGuess++;
    remaining.innerHTML = `${11=numGuess}`
}
function displayMessage(message){

}
function newGame(){

}
function endGame(){

}