
//Detecting Button Press
var numOfDrumButtons = document.querySelectorAll(".drum").length;

for (var i=0; i<numOfDrumButtons; i++) {

  document.querySelectorAll(".drum")[i].addEventListener("click", handleClick); //add event listener for all .drum class buttons for clicks
  // NOTE: dont use () when calling handleClick as we are passing it in as input and not calling it yet

}

function handleClick(){
  var buttonPressed = this.textContent; //"this" is what the event listener logs as current element clicked
  soundPlayer(buttonPressed);
  buttonAnimation (buttonPressed);
}

//Detecting Key Press
document.addEventListener("keydown", handleKeyPress) //add event listener for a keypress to the entire document

function handleKeyPress(event){  //event is what the event listener logs as what what pressed

  var keyPressed = event.key; //event has property "key" which is the string key that was pressed
  soundPlayer(keyPressed);
  buttonAnimation (keyPressed);
}

//Match the key or button press input to the correct sound and play it

function soundPlayer (letterInput) {

  switch (letterInput) {
    case "w":
        var tom1 = new Audio("sounds/tom-1.mp3");
        tom1.play();
      break;

    case "a":
        var tom2 = new Audio("sounds/tom-2.mp3");
        tom2.play();
      break;

    case "s":
        var tom3 = new Audio("sounds/tom-3.mp3");
        tom3.play();
      break;

    case "d":
        var tom4 = new Audio("sounds/tom-4.mp3");
        tom4.play();
      break;

    case "j":
        var crash = new Audio("sounds/crash.mp3");
        crash.play();
      break;

    case "k":
        var kick = new Audio("sounds/kick-bass.mp3");
        kick.play();
      break;

    case "l":
        var snare = new Audio("sounds/snare.mp3");
        snare.play();
      break;

    default:
      console.log(letterInput);
    }
}

function buttonAnimation (currentKey) {
  var activeButton = document.querySelector("." + currentKey); // NOTE: concatonate . so that we access the letter classes for each drum
  activeButton.classList.toggle("pressed");

  setTimeout(function(){ // NOTE: add a delay of 100 millaseconds after we press button which toggles the animation claa (stops animation)
    activeButton.classList.toggle("pressed");
  }, 100)
}
