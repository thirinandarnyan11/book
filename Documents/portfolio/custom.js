$(function () {
    $(window).on('scroll', function () {
        if ( $(window).scrollTop() > 300 ) {
            $('.navbar').addClass('active');
        } else {
            $('.navbar').removeClass('active');
        }
    });
});


