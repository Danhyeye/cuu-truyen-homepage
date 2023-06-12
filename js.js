$(document).ready(function(){
    $(window).scroll(function(){
        var scroll = $(window).scrollTop();
        if (scroll > 300) {
          $(".black").css("background" , "scroll-box");
        }
  
        else{
            $(".black").css("background" , "blue");  	
        }
    })
  })