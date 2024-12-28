var header = document.querySelector("body > div > h1");
var player1 = document.querySelector("body > div > div:nth-child(2) > img");
var player2 = document.querySelector("body > div > div:nth-child(3) > img");

var play1number = Math.floor(Math.random() * 6) + 1;
var play2number = Math.floor(Math.random() * 6) + 1;

player1.src = "./images/dice1.png";
player2.src = "./images/dice2.png";

if (play1number === play2number) {
  header.innerHTML = "Draw";
  imgchange(play1number, play2number);
} else if (play1number > play2number) {
  header.innerHTML = "Player 1 Win";
  imgchange(play1number, play2number);
} else {
  header.innerHTML = "Player 2 Win";
  imgchange(play1number, play2number);
}

function imgchange(play1number, play2number) {
  player1.src = "./images/dice" + play1number + ".png";
  player2.src = "./images/dice" + play2number + ".png";
}

function refreshPage(){
    window.location.reload();
} 