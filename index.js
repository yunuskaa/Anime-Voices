//Detecting Button Press
var numberOfDrumButtons = document.querySelectorAll(".drum").length;

for (var i = 0; i < numberOfDrumButtons; i++) {

  document.querySelectorAll(".drum")[i].addEventListener("click", function () {
    
    var buttonInnerHTML = this.innerHTML;

    makeSound(buttonInnerHTML);
 
  });
}

//Detecting Keyboard Press
document.addEventListener("keypress", function (event) {
  
  makeSound(event.key);

});

function makeSound(key) {

  switch (key) {
    case "<span>w</span>":
      var tom1 = new Audio('songs/oni-chan.mp3');
      tom1.play();
      break;
      case "w":
        var tom1 = new Audio('songs/oni-chan.mp3');
        tom1.play();
        break;
    
    case "<span>a</span>":
      var tom2 = new Audio('songs/oni-chan2.mp3');
      tom2.play();
      break;
      case "a":
        var tom2 = new Audio('songs/oni-chan2.mp3');
        tom2.play();
        break;
  
    case "<span>s</span>":
      var tom2 = new Audio('songs/oni-chan2.mp3');
      tom2.play();
      break;
      case "s":
        var tom2 = new Audio('songs/oni-chan2.mp3');
        tom2.play();
      break;
    
    case "<span>d</span>":
      var tom2 = new Audio('songs/oni-chan2.mp3');
      tom2.play();
      break;
      case "d":
        var tom2 = new Audio('songs/oni-chan2.mp3');
        tom2.play();
    break;
  
    case "<span>j</span>":
      var tom2 = new Audio('songs/oni-chan2.mp3');
      tom2.play();
      break;
      case "j":
        var tom2 = new Audio('songs/oni-chan2.mp3');
        tom2.play();
    break;
      
    case "<span>k</span>":
      var tom2 = new Audio('songs/oni-chan2.mp3');
      tom2.play();
      break;
      case "k":
        var tom2 = new Audio('songs/oni-chan2.mp3');
        tom2.play();
    break;
      
    case "<span>L</span>":
      var tom2 = new Audio('songs/oni-chan2.mp3');
      tom2.play();
      break;
      case "L":
        var tom2 = new Audio('songs/oni-chan2.mp3');
        tom2.play();
    break;
    
    default: console.log(buttonInnerHtml);
      break;
  }
}
