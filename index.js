
var i=0;
while(i<document.querySelectorAll(".drum").length)
{


document.querySelectorAll(".drum")[i].addEventListener("click",handclick);
i++;
}

function handclick()
{
  var buttoninnerHTML = this.innerHTML;
  makesound(buttoninnerHTML);
  animation(buttoninnerHTML);
}

document.addEventListener("keypress",function(event){
    makesound(event.key);
    animation(event.key);
})

function makesound(key){
    switch (key) {
    case "w":
        var audio = new Audio("sounds/crash.mp3");
        audio.play();
        
        break;
     case "a":
         var audio = new Audio("sounds/kick-bass.mp3");
     audio.play();
     

         break;
    case "s":
        var audio = new Audio("sounds/snare.mp3");
    audio.play();
     break;
    case "d":
        var audio = new Audio("sounds/tom-1.mp3");
    audio.play();
      break;
    case "j":
        var audio = new Audio("sounds/tom-2.mp3");
    audio.play();
     break;
    case "k":
        var audio = new Audio("sounds/tom-3.mp3");
    audio.play();
    break;
    case "l":
        var audio = new Audio("sounds/tom-4.mp3");
    audio.play();
    break;                       

    default:console.log(buttoninnerHTML)
        break;
}
 
}
function animation(currentkey){

    var activationbutton=document.querySelector("."+currentkey);
    activationbutton.classList.add("pressed");
    setTimeout(function(){
        activationbutton.classList.remove("pressed")
    },100);

}


