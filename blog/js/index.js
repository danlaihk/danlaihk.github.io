
window.addEventListener("load", function(event) {
    //entry point
    page.init();
});


let page = {
    labels:{},
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

    const imgArr = [ //use json later
        'img_lights_wide.jpg',
        'img_mountains_wide.jpg',
        'img_nature_wide.jpg',
    ],
    captionArr = [
        'Caption Text',
        'Caption Two',
        'Caption Three'
    ],
    /*carousel functions */
   
    showSlides= function(n ){
        let i,

        slides = document.getElementsByClassName("mySlides"),
        dots = document.getElementsByClassName("dot");

        if (n > slides.length) {self.slideIndex = 1}    
        if (n < 1) {self.slideIndex = slides.length}

        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";  
        }
        for (i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace(" active", "");
        }
      
        slides[self.slideIndex-1].style.display = "block";  
        dots[self.slideIndex-1].className += " active";
    };
    let slideHtml = getTemplate(),
    self = this,
    slideNum = 3,
    
    slideList = [],
    windowWidth,
    nextBtn,
    vmData;

    self.slideIndex = 1;

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
            slideList:slideList
        },
        mounted: function () {
            showSlides(self.slideIndex);
        },
        methods:{
            plusSlides: function(n) {
                showSlides(self.slideIndex += n);
            },
         
        }
    };
    
   
    Vue.component('temp-slides', {
        props:['row'],
        template: slideHtml
    })

    Vue.component('temp-indicator',{
        props:['row'],
        template: '<span class="dot" @click="currentSlide(row.index)"></span>',
        methods:{
            currentSlide: function(n){
                showSlides(self.slideIndex = n);
            }
        }
    })
    this.vm = new Vue(vmData);

    //adjust next button
    //if(window.visualViewport.width > 768)
    windowWidth = window.visualViewport.width;
    nextBtn = document.getElementsByClassName('container')[0].getElementsByClassName('next')[0];
   

    console.log(document.getElementsByClassName('mySlides')[0].clientWidth);
    nextBtn.style.left = (window.visualViewport.width * 0.9)+ 'px' ;

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

