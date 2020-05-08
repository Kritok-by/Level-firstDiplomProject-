 
$(document).ready(function(){
  $(".vertical-slider").owlCarousel({
    items: 1,
    loop: true,
    lazyLoadEager: 4,
    dotsContainer: $(".dots-vertical-container"),
    navContainer: $(".nav-vertical-container"),
    animateOut: 'fadeOut'

  });

});

$(document).ready(function(){

  $(".horisontal-slider").owlCarousel({
    items: 1,
    loop: true,
    lazyLoadEager: 4,
    touchDrag: true,
  });
});

var swiper = new Swiper('.swiper-container', {
  
  slidesPerView: 3,
  spaceBetween: 50,
  loop:true,
  autoplay: {
    delay: 4000,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  scrollbar: {
    el: '.swiper-scrollbar',
  },
});

var rangeArea = document.getElementById("container-five__area-range");
var demoArea = document.getElementById("area");
demoArea.innerHTML = rangeArea.value; 
rangeArea.oninput = function() {
  demoArea.innerHTML = this.value;
};

var rangeLevel = document.getElementById("container-five__level-range");
var demoLevel = document.getElementById("level");
demoLevel.innerHTML = rangeLevel.value; 
rangeLevel.oninput = function() {
  demoLevel.innerHTML = this.value;
};

var rangeCost = document.getElementById("container-five__cost-range");
var demoCost = document.getElementById("cost");
demoCost.innerHTML = rangeCost.value; 
rangeCost.oninput = function() {
  demoCost.innerHTML = this.value;
};