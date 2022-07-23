var n=document.querySelectorAll(".drum").length;
for(var i=0;i<n;i++){
   document.querySelectorAll(".drum")[i].addEventListener("click",function(){
    makeSound(this.innerHTML);
    buttonAmimate(this.innerHTML);
   });
}

    document.addEventListener("keypress",function(event){
     makeSound(event.key);
     buttonAmimate(event.key);
    });
 
 function makeSound(k){
    switch(k)
    {
        case "p":
        var audio=new Audio("sounds/tom-1.mp3");
        audio.play();
        break;
        case "a":
        var audio=new Audio("sounds/tom-2.mp3");
        audio.play();
        break;
        case "c":
        var audio=new Audio("sounds/tom-3.mp3");
        audio.play();
        break;
        case "d":
        var audio=new Audio("sounds/tom-4.mp3");
        audio.play();
        break;
        case "r":
        var audio=new Audio("sounds/snare.mp3");
        audio.play();
        break;
        case "k":
        var audio=new Audio("sounds/crash.mp3");
        audio.play();
        break;
        case "l":
        var audio=new Audio("sounds/kick-bass.mp3");
        audio.play();
        break;
        default:
            console.log(k);
    } 
 }
 function buttonAmimate(k){
    var button=document.querySelector("."+k);
    button.classList.add("pressed");
    
    setTimeout(function(){
        button.classList.remove("pressed");
    },100);

 }