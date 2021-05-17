$(function () {
    $('.linkAnchor').click(function () {
        $('.overlayCamera').addClass('is-open');
        return false;
    });

    $('.close-btn').click(function () {
        $('.overlayCamera').removeClass('is-open');
    });


    $('.btn-Awards').click(function () {
        $('.overlayAwards').addClass('is-open');
        return false;
    });

    $('.close-btn').click(function () {
        $('.overlayAwards').removeClass('is-open');
    });
});