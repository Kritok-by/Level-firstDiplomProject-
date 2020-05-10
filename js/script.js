 
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
  spaceBetween: "5%",
  loop:true,
  setWrapperSize: true,
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




var linkNav = document.querySelectorAll('[href^="#"]'),
    V = 0.2;
for (var i = 0; i < linkNav.length; i++) {
    linkNav[i].addEventListener('click', function(e) { 
        e.preventDefault(); 
        var w = window.pageYOffset,  
            hash = this.href.replace(/[^#]*(.*)/, '$1');
        t = document.querySelector(hash).getBoundingClientRect().top,
            start = null;
        requestAnimationFrame(step); 
        function step(time) {
            if (start === null) start = time;
            var progress = time - start,
                r = (t < 0 ? Math.max(w - progress/V, w + t) : Math.min(w + progress/V, w + t));
            window.scrollTo(0,r);
            if (r != w + t) {
                requestAnimationFrame(step)
            } else {
                location.hash = hash 
            }
        }
    }, false);
}


