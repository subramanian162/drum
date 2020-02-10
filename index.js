
function testFunction(){
  var key = this.innerHTML;

  if(key === "w"){
    this.style.color = "white";
    var audio = new Audio("tom-1.mp3");
    audio.play();
  }
  else if(key === "a"){
    this.style.color = "white";
    var audio = new Audio("tom-2.mp3");
    audio.play();
  }
  else if(key === "s"){
    this.style.color = "white";
    var audio = new Audio("tom-3.mp3");
    audio.play();
  }
  else if(key === "d"){
    this.style.color = "white";
    var audio = new Audio("tom-4.mp3");
    audio.play();
  }
  else if(key === "j"){
    this.style.color = "white";
    var audio = new Audio("snare.mp3");
    audio.play();
  }
  else if(key === "k"){
    this.style.color = "white";
    var audio = new Audio("crash.mp3");
    audio.play();
  }
  else{
    this.style.color = "white";
    var audio = new Audio("kick-bass.mp3");
    audio.play();
  }
}

for (var i = 0; i < document.getElementsByClassName("drum").length ; i++) {
  document.getElementsByClassName("drum")[i].addEventListener("click",testFunction);
}
