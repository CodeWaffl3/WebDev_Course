document.body.addEventListener("click", event => {
    if (event.target.nodeName === "BUTTON") {
        sound(event.target.textContent);
        buttonAnimation(event.target.textContent);
    }
});


document.addEventListener("keypress",(e) =>{
    sound(e.key);
    buttonAnimation(e.key);
});

function sound(key) {
    switch (key){
        case "w":
            let audio = new Audio("sounds/tom-1.mp3");
            audio.play();
            break;
        case "a":
            let tom2 = new Audio("sounds/tom-2.mp3");
            tom2.play();
            break;
        case "s":
            let tom3 = new Audio('sounds/tom-3.mp3');
            tom3.play();
            break;
        case "d":
            let tom4 = new Audio('sounds/tom-4.mp3');
            tom4.play();
            break;
        case "j":
            let snare = new Audio('sounds/snare.mp3');
            snare.play();
            break;
        case "k":
            let crash = new Audio('sounds/crash.mp3');
            crash.play();
            break;
        case "l":
            let kick = new Audio('sounds/kick-bass.mp3');
            kick.play();
            break;
        default: console.log(key);
    }
}

function buttonAnimation(key) {
    let button = document.querySelector("." + key);
    button.classList.add("pressed");
    setTimeout(() =>{
        button.classList.remove("pressed");
    },100);
}
