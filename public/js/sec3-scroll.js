function scrollanimation () {
    //Main
    var sec3 = document.querySelector('.sec3');
    var sec3position = sec3.getBoundingClientRect().top;
    var screenposition = window.innerHeight / 1.2;

    //text
    var sec3container = document.querySelector('.sec3container');
    var sec3containerposition = sec3container.getBoundingClientRect().right;
    var screenpositionright = window.innerWidth;
    
    //Main
    if(sec3position < screenposition){
        sec3.classList.add('sec3add')
    };

    //text
    if(sec3containerposition < screenpositionright){
        sec3container.classList.add('sec3containeradd');
    };
}

window.addEventListener("scroll",scrollanimation)