'use strict';

const guessedNumberEl = document.getElementById('guess'); // Input box
const btnCheck = document.getElementById('guess-btn'); // Click button
const messageEl = document.getElementById('message'); // display
const labelScoreEl = document.getElementById('labelScore');
const highScoreEl = document.getElementById('highScore');
// const totalGuessEl = document.getElementById('totalGuess'); // Count that guessed
const secretNumberBtnEl = document.getElementById('secretNumberBtn');
const nxtBtnEl = document.getElementById("nxt")
const btnAgainEl = document.getElementById("btnAgain");
const enterEl = document.getElementById('enter');
const nameEl = document.getElementById('name');


//global variable
let score = 10;
let secretNumber = Math.trunc(Math.random()*20)+1;
// random number + 1 = trunc

let highScore = 0;
//function 
function init(){
    labelScoreEl.innerText = score;
    highScoreEl.innerText = highScore;
    let secretNumber = Math.trunc(Math.random()*20)+1;
}
//event listener 
messageEl.innerText = "🚩Start Guessing...."
btnCheck.addEventListener('click',()=>{
const guess= Math.round(Number(guessedNumberEl.value));
// console.log(guess);
// console.log(typeof guess);
if(score>1){
    if(!guess || guess <0){
        messageEl.style.color = `var(--error-text)`;
        messageEl.innerText =`ennter a valid input`;
}else{
    if(guess === secretNumber){

        messageEl.style.color = `var(--success-text)`;
        messageEl.innerText =`😍You are correct`;
        // let secretNumber = Math.trunc(Math.random()*20)+1;
        highScore++;
        highScoreEl.innerText = highScore;
        guessedNumberEl.value =null;
        // let secretNumber = Math.trunc(Math.random()*20)+1
        // console.log(secretNumber);
        // document.querySelector('.secretNumberBtn').innerText = secretNumber;
}
else if(guess>secretNumber){
    messageEl.style.color = `var(--error-text)`;
    messageEl.innerText =  `😱To high value`;
    guessedNumberEl.value =null;
    score-- ;
    labelScoreEl.innerText = score;
  
}
else if(guess<secretNumber){
    messageEl.style.color = `var()`;
    messageEl.innerText =  `😑To low value`;
    guessedNumberEl.value =null;
    score--;
    labelScoreEl.innerText = score;
}
}
}
else{
    messageEl.style.color = 'var(--error-text)';
    document.querySelector('.secretNumberBtn').innerText = secretNumber;

    // let secretNumber = Math.trunc(Math.random()*20)+1;
    messageEl.innerText = `😭you lost the game`;

   
}
});


btnAgainEl.addEventListener('click',()=>{
    let secretNumber = Math.trunc(Math.random()*20)+1;
    labelScoreEl.innerText =10;
    // messageEl.innerText = "🚩Start Guessing...."
    btnAgainEl.value =secretNumber;
    console.log(secretNumber);
    // window.location.reload();
    messageEl.innerText = "🚩Start Guessing...."
    highScoreEl.innerText = highScore;
    
    // secretNumberBtnEl.value = secretNumber;
});

secretNumberBtnEl.addEventListener('click',()=>{
    messageEl.innerText =secretNumber;
   
    // secretNumberBtnEl.value = secretNumber;
});


//  nxtBtnEl.addEventListener('click',()=>{
//     let secretNumber = Math.trunc(Math.random()*20)+1;
//  });

enterEl.addEventListener('click',()=>{
msg.innerText=`hii😍${nameEl.value},I am thinking of a number between 1-20,
Can you guess it😉.`;

});

init();
