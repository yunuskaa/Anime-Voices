var numberOfDrumButtons = document.querySelectorAll(".drum").length;

for (var i = 0; i < numberOfDrumButtons; i++) {

  document.querySelectorAll(".drum")[i].addEventListener("click", function () {


    var buttonInnerHtml = this.innerHTML;

    switch (buttonInnerHtml) {
      case "<span>w</span>":
        var tom1 = new Audio('songs/oni-chan.mp3');
        tom1.play();
        break;
      
      case "<span>a</span>":
        var tom2 = new Audio('songs/oni-chan2.mp3');
        tom2.play();
        break;
    
      case "<span>s</span>":
        var tom3 = new Audio('songs/oni-chan3.mp3');
        tom3.play();
        break;
      default:
        break;
    }

  })
}

