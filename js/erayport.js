$(window).scroll(function () {
    if ($(document).scrollTop() > 50) {
        $('nav').addClass('shrink');
    } else if ($(document).scrollTop() < 50) {
        $('nav').removeClass('shrink');
    }
})



var hashTagActive = "";
    $(".scroll").click(function (event) {
        if(hashTagActive != this.hash) {
            event.preventDefault();
            var dest = 0;
            if ($(this.hash).offset().top > $(document).height() - $(window).height()) {
                dest = $(document).height() - $(window).height();
            } else {
                dest = $(this.hash).offset().top;
            }
            $('html,body').animate({ scrollTop: dest }, 'fast');
            hashTagActive = this.hash;hashTagActive = "";
        }
    });
