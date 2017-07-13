$(document).ready(function(){
    
    $("html").niceScroll({
        cursorcolor:"#64BB3C",
        cursorborder:"0px solid #fff",
        cursorwidth:"7",
        zindex:10,
        scrollspeed:"60"
    });

    var activeBar= $("#fixed-menu");
    $(window).scroll(function(){
        if ($(this).scrollTop() >=150) {
            activeBar.addClass("active-bar");
        }
        else {
            scrollButton.hide(1000);
            activeBar.removeClass("active-bar");
        }
    });

    var scrollButton= $("#shm");
    $(window).scroll(function(){
        $(this).scrollTop() >=490 ? scrollButton.show() : scrollButton.hide();
    });
    scrollButton.click(function(){
        $("html,body").animate({scrollTop : 0}, 800);
    });
    
    $("#owl-example").owlCarousel({
        autoPlay: 5000, //Set AutoPlay to 3 seconds
        singleItem:true,
        lazyLoad : true
    });
    $("#owl-example-2").owlCarousel({
        autoPlay: 3000,
        items : 5,
        lazyLoad : true
    });

});
