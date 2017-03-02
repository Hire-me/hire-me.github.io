/* ======= Animations ======= */
$(document).ready(function() {
    
    //Only animate elements when using non-mobile devices    
    if (isMobile.any === false) { 
        $('.event-banner .event-pass .freebtn-wrap').one('inview', function(isInView) {
                    if (isInView) {
                        $(this).addClass('animated slideInDown-alter ');
                    }
        });

        $('.speaker .speaker-details h1,.speaker .speaker-details h2,.speaker .speaker-details h5,.speaker .speaker-details p').one('inview', function(isInView) {
                    if (isInView) {
                        $(this).addClass('animated slideInRight ');
                    }
        });
        $('.sponser .sponser-logos li').one('inview', function(isInView) {
                    if (isInView) {
                        $(this).addClass('animated slideInUp ');
                    }
        });


        
        

         
         
       
       
        
        
       
    }
        
});