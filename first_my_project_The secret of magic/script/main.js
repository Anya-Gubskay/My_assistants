//Для фиксации меню
// Получает значение отступа прокрутки сверху для первого элемента в наборе.
    $(window).scroll(function () {
        if($(this).scrollTop()>300 && !$('menu').hasClass('fixed')){
            //Плавной изменение прозрачности
            $('menu').fadeOut(0).addClass('fixed').fadeIn(400);
        }
        else if ($(this).scrollTop() < 200) {
            $('menu').removeClass('fixed');
        }
});

// Для меню
function classToggle () {
    $('li').toggleClass('menu__ToggleShow');
}
document.querySelector ('.menu__button')
    .addEventListener ('click', classToggle);









