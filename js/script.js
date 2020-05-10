 
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


// const anchors = document.querySelectorAll('a[href*="#"]')

// for (let anchor of anchors) {
//   anchor.addEventListener('click', function (e) {
//     e.preventDefault()
    
//     const blockID = anchor.getAttribute('href').substr(1)
    
//     document.getElementById(blockID).scrollIntoView({
//       behavior: 'smooth',
//       block: 'start'
//     })
//   })
// }


const anchors = [].slice.call(document.querySelectorAll('a[href*="#"]')),
      animationTime = 300,
      framesCount = 20;
anchors.forEach(function(item) {
  item.addEventListener('click', function(e) {
    e.preventDefault();
    let coordY = document.querySelector(item.getAttribute('href')).getBoundingClientRect().top + window.pageYOffset;
    let scroller = setInterval(function() {
      let scrollBy = coordY / framesCount;
      if(scrollBy > window.pageYOffset - coordY && window.innerHeight + window.pageYOffset < document.body.offsetHeight) {
        window.scrollBy(0, scrollBy);
      } else {
        window.scrollTo(0, coordY);
        clearInterval(scroller);
      }
    }, animationTime / framesCount);
  });
});


