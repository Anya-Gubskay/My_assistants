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
function classToggle () {
    $('li').toggleClass('menu__ToggleShow');
}
document.querySelector ('.menu__button')
    .addEventListener ('click', classToggle);

//Для скролла плавного вверх на страничке знаменитые фокусники
window.onload = function(){
    //window.scrollTo(x,y)
    var scrolled;
    var timer;

    document.getElementById('top').onclick = function(){
        scrolled = window.pageYOffset;
        scrollToTop();
    };
    function scrollToTop(){
        if (scrolled > 0) {
            window.scrollTo(0, scrolled);
            scrolled = scrolled - 100; //100 - скорость прокрутки
            timer = setTimeout(scrollToTop, 50);
        }
        else {
            clearTimeout(timer);
            window.scrollTo(0,0);
        }
    }
};

