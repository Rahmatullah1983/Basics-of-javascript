//Genrate a random number.
//Give the user ability to guess.
// If they guess and they are wrong, ask again(hint).
//If they win say they win.

function guessGame(){
    let randomNr = Math.floor(Math.random()*11);
    let guess;
    do{
        guess=prompt('guess a number bitween 1 to 10');
        console.log(guess, randomNr);
        if(randomNr < guess){
            alert('you guessed too high')
        }else if(randomNr >guess){
            alert('you guessed too low')
        }
    }while(guess != randomNr){
        alert('wow you won')
    }

}
        
    
    guessGame();