var carousel = document.querySelector('.carousel');

var stage = document.querySelector('.carousel-stage')

var prev = document.querySelector('.carousel-prev')

var next = document.querySelector('.carousel-next')

var slide = document.querySelectorAll('.single-slide')

var slideWidth = slide[0].clientWidth;
console.log(slideWidth);

var currentIndex = 0;

var slidesNumber = slide.length - 1;

function goToSlide(index){
    
    if (index < 0){
        index = slidesNumber;
    }
    else if(index > slidesNumber){
        index=0;
    }
    
    carousel.style.left = index * (-slideWidth);
    currentIndex = index;
}

function slideToNext(){
    goToSlide(currentIndex + 1);
}

function slideToPrev(){
    goToSlide(currentIndex - 1);
}

function bindEvents(){
    prev.addEventListener('click',slideToPrev)
    next.addEventListener('click',slideToNext)
}

function autorotate(){
    setInterval(slideToNext, 2000);
}

bindEvents()
autorotate()