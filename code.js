$(function () {
    $('.linkCamera').click(function () {
        $('.overlayCamera').addClass('is-open');
        return false;
    });

    $('.close-btn').click(function () {
        $('.overlayCamera').removeClass('is-open');
    });


    $('.linkAwards').click(function () {
        $('.overlayAwards').addClass('is-open');
        return false;
    });

    $('.close-btn').click(function () {
        $('.overlayAwards').removeClass('is-open');
    });
});