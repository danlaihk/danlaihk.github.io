
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
    self = this,
    slideNum = 3,
    imgArr = [ //use json later
        'img_lights_wide.jpg',
        'img_mountains_wide.jpg',
        'img_nature_wide.jpg',
    ],
    captionArr = [
        'Caption Text',
        'Caption Two',
        'Caption Three'
    ],
    slideList = [],
    vmData;


    for(let i = 0; i < slideNum; i++){
        let rowObj = {
            index: i+1,
            caption: captionArr[i],
            img: 'images/'+imgArr[i]
        };
        slideList.push(rowObj);
    }


    vmData = {
        el: self.renderer,
        data:{
            slideIndex:1,
            slideList:slideList
        },
        mounted: function () {
            this.showSlides(this.slideIndex);
        },
        methods:{
            plusSlides: function(n) {
                this.showSlides(this.slideIndex += n);
            },
            currentSlide: function(n) {
                this.showSlides(this.slideIndex = n);
            },
            showSlides: function(n) {
                let i,

                slides = document.getElementsByClassName("mySlides"),
                dots = document.getElementsByClassName("dot");

                if (n > slides.length) {this.slideIndex = 1}    
                if (n < 1) {this.slideIndex = slides.length}
       
                for (i = 0; i < slides.length; i++) {
                    slides[i].style.display = "none";  
                }
                for (i = 0; i < dots.length; i++) {
                    dots[i].className = dots[i].className.replace(" active", "");
                }
              
                slides[this.slideIndex-1].style.display = "block";  
                dots[this.slideIndex-1].className += " active";
            }
        }
    };
    
   
    Vue.component('slides', {
        props:['row'],
        template: slideHtml
    })


    this.vm = new Vue(vmData);


  

    function getTemplate(){
        let slideHtml = '';
        
        slideHtml += '<div class="mySlides fade">';
            slideHtml += '<div class="numbertext">{{row.index}} / 3</div>';
            slideHtml += '<img :src="row.img" style="width:100%">';
            slideHtml += '<div class="text">{{row.caption}}</div>';
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
*/

