
$(document).ready(function(){
    function reorient(e) {
        var portrait = (window.orientation % 180 == 0);
        $("body > section").css("-webkit-transform", !landscape ? "rotate(90deg)" : "");
    }
    window.onorientationchange = reorient;
    window.setTimeout(reorient, 0);
    

    

});
