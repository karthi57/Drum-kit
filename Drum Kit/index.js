//detectin button events
numberOfDrumsButton = document.querySelectorAll(".drum").length;

for(let i =0; i<numberOfDrumsButton;i++){
    document.querySelectorAll('.drum')[i].addEventListener("click",function (){
    // console.log(this)

    let buttonInnerHtml = this.innerHTML;

   makeSound(buttonInnerHtml);
   buttonAnimation(buttonInnerHtml);
    });
}

//Detecting keyboard events

document.addEventListener('keydown', (event)=>{
    makeSound(event.key);
    buttonAnimation(event.key);
})

function makeSound(key){
    switch (key) {
        case 'w':var audio = new  Audio("sounds/tom-1.mp3");
        audio.play();
            
            break;
        case 'a':var audio = new  Audio("sounds/tom-2.mp3");
        audio.play();
            
            break;
        case 's':
            var audio = new  Audio("sounds/tom-3.mp3");
            audio.play();
            break;
        case 'd':
            var audio = new  Audio("sounds/tom-4.mp3");
            audio.play();
            break;
        case 'j':
            var audio = new  Audio("sounds/crash.mp3");
            audio.play();
            break;
        case 'k':
            var audio = new  Audio("sounds/kick-bass.mp3");
            audio.play();
            break;
        case 'l':
            var audio = new  Audio("sounds/snare.mp3");
            audio.play();
            break; 
             
        default:console.log(buttonInnerHtml);
            break;
    }

}
function buttonAnimation(currentKey){
    let animation = document.querySelector("."+currentKey)
    animation.classList.add("pressed");

    //to remove function after some time
    setTimeout(function(){
        animation.classList.remove("pressed")
    },100);
}