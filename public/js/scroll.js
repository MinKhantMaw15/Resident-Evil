function scrollefct () {
    var contect1 = document.querySelector('.content1');
    var contect1position = contect1.getBoundingClientRect().top;

    var contect2 = document.querySelector('.content2');
    var contect2position = contect1.getBoundingClientRect().top;

    var contect3 = document.querySelector('.content3');
    var contect3position = contect1.getBoundingClientRect().top;

    var contect4 = document.querySelector('.content4');
    var contect4position = contect1.getBoundingClientRect().top;
    
    
    var screenposition = window.innerHeight / 1.2;

    if(contect1position < screenposition){
        contect1.classList.add('content1show')
    }
    
    if(contect2position < screenposition){
        contect2.classList.add('content2show')
    }

    if(contect3position < screenposition){
        contect3.classList.add('content3show')
    }

    if(contect4position < screenposition){
        contect4.classList.add('content4show')
    }
}

window.addEventListener('scroll',scrollefct);