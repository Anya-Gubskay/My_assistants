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

//Для раскрывания секрета на страничке обчучения фокусам
$(document).ready(function(){
    $('.secret').click(function(){
        $(this).parent().children('div.container__item__text').fadeToggle( 1300, "linear");
        return false;
    });
});

//Для раскрывания секрет  на мобильном обчучения фокусам
$(document).ready(function(){
    $('.mobile__secret').click(function(){
        $(this).parent().children('div.mobile__secret__text').fadeToggle( 1300, "linear");
        return false;
    });
});

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
// function say_hi() {
//     var fname = document.getElementById('number').value;
//     var lname = document.getElementById('data').value;
//
//     var html = 'Hello <b>' + fname + '</b> ' + lname;
//
//     document.getElementById('result').innerHTML = html;
// }
//
// document.getElementById('say').addEventListener('click', say_hi);
