
window.addEventListener("load", function(event) {
    //entry point
    page.init();
});


let page = {
    prop:{
        lang: "tc",
        renderer: "[data-renderer='page']"
    },
    init: function(){
        let self = this;
        self.carousel.init();
    },
    carousel: new pageComponent("[data-renderer='carousel']")
};




page.carousel.init = function(){
    let slideHtml = getTemplate(),
    imgArr = [ //use json later
        'img_lights_wide.jpg',
        'img_mountains_wide.jpg',
        'img_nature_wide.jpg',
    ],
    captionArr = [
        'Caption Text',
        'Caption Two',
        'Caption Three'
    ]
    vmData;

    

    vmData = {
        el: '[data-renderer="container"]',
        data:{
            slideList:[
                {
                    index:1
                },
            ]
        }
    };



    Vue.component('slides', {
        prop:['row'],
        template: slideHtml
    })

    this.vm = new Vue(vmData);

    function getTemplate(){
        let slideHtml = '';
        slideHtml += '<div class="mySlides fade">';
            slideHtml += '<div class="numbertext">1 / 3</div>';
            slideHtml += '<img src="./images/img_lights_wide.jpg" style="width:100%">';
            slideHtml += '<div class="text">Caption Text</div>';
        slideHtml += '</div>';
        return slideHtml;
    }
}

/*carousel */

/*
let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  
  let slides = document.getElementsByClassName("mySlides");
  
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }

  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}*/

