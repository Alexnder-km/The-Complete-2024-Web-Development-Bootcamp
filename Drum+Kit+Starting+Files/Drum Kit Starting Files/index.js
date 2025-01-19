// document.querySelectorAll("button").addEventListener("click", function () {
//   alert("Clicked");
// });
var NumOfButtons = document.querySelectorAll(".drum").length;
const buttons = document.querySelectorAll(".drum");

document.addEventListener("keydown", function (event) {
  MakeSound(event.key);
});

for (var i = 0; i < NumOfButtons; i++) {
  buttons[i].addEventListener("click", function () {
    // if (this.innerText == "w") {
    //   audiow.play();
    // } else if (this.innerText == "a") {
    //   audioa.play();
    // } else if (this.innerText == "s") {
    //   audios.play();
    // } else if (this.innerText == "d") {
    //   audiod.play();
    // } else if (this.innerText == "j") {
    //   audioj.play();
    // } else if (this.innerText == "k") {
    //   audiok.play();
    // } else if (this.innerText == "l") {
    //   audiol.play();
    // }
    // var buttonInnerHtml = this.innerText;
    MakeSound(this.innerText);
  });
}

function MakeSound(Key) {
  switch (Key) {
    case "w":
      audiow.play();
      break;
    case "a":
      audioa.play();
      break;
    case "d":
      audiod.play();
      break;
    case "s":
      audios.play();
      break;
    case "j":
      audioj.play();
      break;
    case "k":
      audiok.play();
      break;
    case "l":
      audiol.play();
      break;

    default:
      console.log();
  }
}

var audiow = new Audio("sounds/tom-1.mp3");
var audioa = new Audio("sounds/tom-2.mp3");
var audios = new Audio("sounds/tom-3.mp3");
var audiod = new Audio("sounds/tom-4.mp3");
var audioj = new Audio("sounds/snare.mp3");
var audiok = new Audio("sounds/crash.mp3");
var audiol = new Audio("sounds/kick-bass.mp3");
