class pageComponent{
    constructor(renderer){
        this.renderer = renderer;
    }
  
}

window.addEventListener("load", function(event) {
    general.init();
});



let general = {
    labels:{},
    prop:{
        lang: "tc",
        renderer: "body"
    },
    checkMobile: function(){

        let isMobile = (window.visualViewport.width > 768)?  false: true;
     
        return isMobile;
    },
    init: function(){
        let self = this;
        
        
       // if(!self.checkMobile()) {self.adjustElement();}
        
    },
    adjustElement: function(){

        let headInput = document.getElementById('headInput'),
        inputRight = headInput.getBoundingClientRect().right,
        
        socialMenu = document.getElementById('col_social'),
        socialRect = socialMenu.getBoundingClientRect(),
        calLeft = inputRight- socialRect.width,
        
        //widget left
        widgetLeft = document.getElementsByClassName('widget-top')[0].getBoundingClientRect().left,
        pRight = Math.abs(calLeft - widgetLeft) ;

        socialMenu.style.marginLeft = '3px' ;
        socialMenu.style.marginRight = pRight+"px" ;
        //socialMenu.style. = pRight+"px";

        //document.getElementById("myBtn").style.left = "100px";


        

      
        
        //adjust social menu
    }
};


