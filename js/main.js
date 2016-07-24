$(function() {

    var windowWidth = $(window).width();
    var slidePosition = 0;
    var slideCount = $('.slider-container .slide').length;
    var speed = 300;
    var autoPlayDelay = 2000;

    // Init
    $('.slide-row').css({
        'transition': 'all ' + speed + 'ms ease-out',
        'width': (windowWidth * slideCount + 15) + 'px'
    });

    function slideController(slidePosition) {
        var position = slidePosition * windowWidth * (-1);
        $('.nav-panel a').removeClass('active');
        $('.nav-panel a[data-slide="' + (slidePosition + 1) + '"]').addClass('active');
        // Animation type
        // $('.slide-row').css('left', position);
        $('.slide-row').css('transform', 'translateX(' + position + 'px)');
    }

    setInterval(function() {
        slidePosition++;
        if (slidePosition == slideCount) {
            slidePosition = 0;
        }
        slideController(slidePosition);
    }, autoPlayDelay);

    $('.arrow#left').click(function() {
        slidePosition--;
        if (slidePosition < 0) {
            slidePosition = slideCount - 1;
        }
        slideController(slidePosition);
    });
    $('.arrow#right').click(function() {
        slidePosition++;
        if (slidePosition == slideCount) {
            slidePosition = 0;
        }
        slideController(slidePosition);
    })

    $('.nav-panel a').click(function() {
        var slide = parseFloat($(this).attr('data-slide'));
        slidePosition = slide - 1;
        slideController(slidePosition);
    });

});
