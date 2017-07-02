$(".portfolio-item img").click(function(e) {
    e.preventDefault();
    $("#overlay").fadeIn(200);
    let $image = $('<img>').attr('src', $(this).attr('src'));
    $('.image-container').append($image);
});

$("#overlay").click(function() {
    $(this).fadeOut(200, function() {
        $('.image-container').empty();
    });
}).find(".image-container").click(function() {
    return false;
});

$(".menu-toggle").click(function() {
    $(this).toggleClass("on");
    $(".main-nav").slideToggle();
    return false;
});

//$(document.body).css("-webkit-overflow-scrolling", "touch");