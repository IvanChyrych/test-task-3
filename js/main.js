/* Мобильное меню */
$('.burger').click(function() {
    $('.menu').toggle(500);
    $(this).toggleClass('close');
});