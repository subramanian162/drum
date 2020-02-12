//Detecting Button press

for (var i = 0; i < document.getElementsByClassName("drum").length ; i++) {
  document.getElementsByClassName("drum")[i].addEventListener("click",function () {
      var key = this.innerHTML;
      playSoundWithRespectToPressedKey(key);
      buttonAnimation(key);
  });
}

//Detecting KeyBoard press

document.addEventListener("keydown" , function (event){
  var pressedKey = event.key;
  playSoundWithRespectToPressedKey(pressedKey);
  buttonAnimation(pressedKey);
});

//Play an Audio based on the key and button pressedKey

function playSoundWithRespectToPressedKey(pressedKey){
  switch (pressedKey) {
    case "w":
      var audio = new Audio("tom-1.mp3");
      audio.play();
    break;
    case "a":
      var audio = new Audio("tom-2.mp3");
      audio.play();
    break;
    case "s":
      var audio = new Audio("tom-3.mp3");
      audio.play();
    break;
    case "d":
      var audio = new Audio("tom-4.mp3");
      audio.play();
    break;
    case "j":
      var audio = new Audio("snare.mp3");
      audio.play();
    break;
    case "k":
      var audio = new Audio("crash.mp3");
      audio.play();
    break;
    case "l":
      var audio = new Audio("kick-bass.mp3");
      audio.play();
    break;
    default:
     console.log("Invalid Key..\n Press a valid key");
  }
}

function buttonAnimation(pressedKey)
{
  var currentButton = document.querySelector("."+pressedKey);

  //Now it show the Button pressed view
  currentButton.classList.add("pressed");

  //After 1 sec button will be in normal view
  setTimeout(function () {
    currentButton.classList.remove("pressed");
  }, 100);

}
