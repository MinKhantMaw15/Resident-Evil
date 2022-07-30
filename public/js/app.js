var nav1 = document.querySelector('.navigation');
var nav2 = document.querySelector('.nav2');
var button = document.querySelector('.button');
var slideshow = document.querySelector('.slideshow-container');
var imglogo = document.querySelector('.imglogo');

//Intro
var btnclose = document.getElementById('btn1');
var btnclose2 = document.getElementById('btn2');
var mainheader = document.querySelector('.mainheader');
var intro = document.querySelector('.intro');
var sec2 = document.querySelector('.sec2')


button.addEventListener("click", function() {
    nav2.classList.toggle('nav2show');
    button.classList.toggle('toggle');
    slideshow.classList.toggle('hide');
    imglogo.classList.toggle('imglogohide')
});

btnclose.addEventListener("click", function() {
    mainheader.classList.toggle('mainheaderadd');
    intro.classList.toggle('introadd')
    slideshow.classList.toggle('slideshowadd');
    sec2.classList.add('sec2show')

})
btnclose2.addEventListener("click", function() {
    mainheader.classList.toggle('mainheaderadd');
    intro.classList.toggle('introadd')
    slideshow.classList.toggle('slideshowadd');
    sec2.classList.add('sec2show')

})