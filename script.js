const formbutton = document.querySelector('form button');

function StartGame(event) {
     event.preventDefault();

     const form = document.querySelector('form');
     const input = document.querySelector('input');
     const gamelayout = document.querySelector('body div')
     const username = document.getElementById('username');

     username.innerText = input.value.charAt(0).toUpperCase() + input.value.slice(1);
     form.classList.add('no-show');
     gamelayout.classList.remove('no-show');
}
formbutton.addEventListener('click', StartGame);


let userPoints = 0;
let draw = 0;
let computerPoints = 0;

const scissors = document.getElementById('scissors');
const paper = document.getElementById('paper');
const rock = document.getElementById('rock');
const userP = document.getElementById('userP');
const drawP = document.getElementById('drawP');
const pcP = document.getElementById('pcP');
const rockpaperscissors = document.querySelector('.images');
const message  = document.querySelector('.choose');
const restartButton = document.querySelector('#restart');

function game(userChoice) {
     const computer = Math.floor(Math.random()*3)+1;
     let computerChoice;

     if (computer === 1) {
          computerChoice = 'rock';
     } else if (computer === 2) {
          computerChoice = 'paper';
     } else if ( computer === 3) {
          computerChoice = 'scissors';
     }

     if (userChoice === computerChoice) {
          draw++;
          drawP.innerText = draw;
     } else if (userChoice === 'scissors' && computerChoice === 'paper' ) {
          userPoints++;
          userP.innerText = userPoints;
     } else if (userChoice === 'scissors' && computerChoice === 'rock') {
          computerPoints++;
          pcP.innerText = computerPoints;
     } else if (userChoice === 'rock' && computerChoice === 'paper' ) {
          computerPoints++;
          pcP.innerText = computerPoints;
     } else if (userChoice === 'rock' && computerChoice === 'scissors') {
          userPoints++;
          userP.innerText = userPoints;
     } else if (userChoice === 'paper' && computerChoice === 'rock' ) {
          userPoints++;
          userP.innerText = userPoints;
     } else if (userChoice === 'paper' && computerChoice === 'scissors') {
          computerPoints++;
          pcP.innerText = computerPoints;
     } 

     /*        Om någon vinner         */
     if (userPoints === 3) {
          message.innerText = 'Grattis du vann!';
          message.style.color = 'rgb(61, 152, 61)';
          rockpaperscissors.classList.add('no-show');
          restartButton.classList.remove('no-show');
          restartButton.addEventListener('click', restart);
     } else if (computerPoints === 3) {
          message.innerText = 'Förlust, du suger.';
          message.style.color = 'rgb(187, 32, 32)';
          rockpaperscissors.classList.add('no-show');
          restartButton.classList.remove('no-show');
          restartButton.addEventListener('click', restart);
     }
}

scissors.addEventListener('click', () => {game('scissors')});
rock.addEventListener('click', () => {game('rock')});
paper.addEventListener('click', () => {game('paper')});


function restart() {
     userPoints = 0;
     draw = 0;
     computerPoints = 0;

     message.innerText = 'Gör ditt val!';
     rockpaperscissors.classList.remove('no-show');
     userP.innerText = 0;
     drawP.innerText = 0;
     pcP.innerText = 0;
     restartButton.classList.add('no-show');
}