// kught and sound memory game
// Global constants
const clueHoldTime = 1000; 
const cluePauseTime = 350; // ms? how long to pause in between clues
const nextClueWaitTime = 1000;


// Global Variables
var pattern = [2, 2, 4, 3, 2, 1, 2, 4];  // track pattern presses
var progress = 0;  // how far are the play is in guessing the pattern

// becomes true once Start is pressed
var gamePlaying = false;
var tonePlaying = false;
var volume = 0.5;   // 0.0 < volume < 1.0
var guessCounter = 0;  // keeps track of guesses in clue sequence

function startGame() {
  // initialize game variables
  progress = 0;
  gamePlaying = true;
  
  // swap the Start and Stop buttons
  document.getElementById("startBtn").classList.add("hid");
  document.getElementById("stopBtn").classList.remove("hid");
  playClueSequence();
}

function stopGame() {
  gamePlaying = false;
  document.getElementById("stopBtn").classList.add("hid");
  document.getElementById("startBtn").classList.remove("hid");
  
}

/****************** Sound Synthesis Functions ***************/
const freqMap = {
  1: 261.6,
  2: 329.6,
  3: 392,
  4: 520,
  5: 1000,
  6: 900
}

function playTone(btn,len){ 
  o.frequency.value = freqMap[btn]
  g.gain.setTargetAtTime(volume,context.currentTime + 0.05,0.025)
  context.resume()
  tonePlaying = true
  setTimeout(function() {stopTone()},len)
}
function startTone(btn){
  if(!tonePlaying){
    context.resume()
    o.frequency.value = freqMap[btn]
    g.gain.setTargetAtTime(volume,context.currentTime + 0.05,0.025)
    context.resume()
    tonePlaying = true
  }
}
function stopTone(){
  g.gain.setTargetAtTime(0,context.currentTime + 0.05,0.025)
  tonePlaying = false
}

// Page Initialization
// Init Sound Synthesizer
var AudioContext = window.AudioContext || window.webkitAudioContext 
var context = new AudioContext()
var o = context.createOscillator()
var g = context.createGain()
g.connect(context.destination)
g.gain.setValueAtTime(0,context.currentTime)
o.connect(g)
o.start(0)
/*************************** Sound ***************************/

function lightButton(btn){
  document.getElementById("button"+btn).classList.add("lit")
}
function clearButton(btn){
  document.getElementById("button"+btn).classList.remove("lit")
}

function playSingleClue(btn){
  if(gamePlaying){
    lightButton(btn);
    playTone(btn,clueHoldTime);
    setTimeout(clearButton,clueHoldTime,btn);
  }
}

function playClueSequence(){
  var guessCounter = 0;   // reset guessCounter every time a clue is played
  
  context.resume();
  let delay = nextClueWaitTime; //set delay to initial wait time 1s
  for(let i=0; i<=progress; i++){ // for each clue that is revealed so far
    console.log("play single clue: " + pattern[i] + " in " + delay + "ms")
    setTimeout(playSingleClue,delay,pattern[i]) // set a timeout to play that clue
    delay += clueHoldTime 
    delay += cluePauseTime;
  }
}

// MAIN game logic, btn will be number of correspondng active button
function guess(btn) {
  console.log("user guessed: " + btn);
  if(!gamePlaying) {
    return;
  }
  else {
    // Is guess correct? check. 
    if (btn = pattern[guessCounter]) {
      //Guess was correct! but is the turn over?
      if(guessCounter == progress){  // last turn
        if(progress == pattern.length - 1){ // check is it is the last turn
          //GAME OVER: WIN!
          winGame();
        }
        else{ // not last turn
          progress++;
          playClueSequence();
        }
      }
      
    else{  // turn is not over
      guessCounter++;  }
      
    }
    else
      loseGame();
  }
}
    
// winning/losing
function winGame(){
  stopGame();
  alert("Game Over. You won!");
}
  
function loseGame(){
  stopGame();
  alert("Game Over. You lost.");
}
