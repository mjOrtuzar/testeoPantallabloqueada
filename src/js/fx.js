
$(document).ready(function(){
    $(window).bind('orientationchange resize', function(event){
        if (event.orientation) {
          if (event.orientation == 'landscape') {
            if (window.rotation == 90) {
              rotate(this, -90);
            } else {
              rotate(this, 90);
            }
          }
        }
      });
      

    

});
