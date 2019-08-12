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

// Для появления формы
function toggleForm() {
    $('form').fadeToggle( 1300,"linear");
}
// На страничке магазин появляется блок по клику на абзац
$(document).ready(function(){
    $('.display').click(function(){
        $(this).parent().children('div.section__text').slideToggle('norm');
        return false;
    });
});

//Для блокировки поля  time в форме при нажатии на самовывоз
$(document).ready(function() {
    $("[value='2']").click(function () {
        $("#time").prop("disabled",true);
    });
    $("[value='1']").click(function () {
        $("#time").prop("disabled", false);
    });
});

//Проверка заполнения полей формы
(function( $ ){
    $(function() {
        $('.rf').each(function(){
            // Объявляем переменные (форма и кнопка отправки)
            var form = $(this),
                btn = form.find('.btn_submit');
            // Добавляем каждому проверяемому полю, указание что поле пустое
            form.find('.rfield').addClass('empty_field');

            // Функция проверки полей формы
            function checkInput(){
                form.find('.rfield').each(function(){
                    if($(this).val()){
                        // Если поле не пустое удаляем класс-указание
                        $(this).removeClass('empty_field');
                    } else {
                        // Если поле пустое добавляем класс-указание
                        $(this).addClass('empty_field');
                    }
                });
            }

            // Функция подсветки незаполненных полей
            function lightEmpty(){
                form.find('.empty_field').css({'border':'solid 4px red' });
                alert('Пожалуйста заполните красные поля формы!');
                // Через время удаляем подсветку
                setTimeout(function(){
                    form.find('.empty_field').removeAttr('style');
                },7000);
            }

            // Проверка в режиме реального времени
            setInterval(function(){
                // Запускаем функцию проверки полей на заполненность
                checkInput();
                // Считаем к-во незаполненных полей
                var sizeEmpty = form.find('.empty_field').size();
                // Вешаем условие-тригер на кнопку отправки формы
                if(sizeEmpty > 0){
                    if(btn.hasClass('disabled')){
                        return false
                    } else {
                        btn.addClass('disabled')
                    }
                } else {
                    btn.removeClass('disabled')
                }
            },500);

            // Событие клика по кнопке отправить
            btn.click(function(){
                if($(this).hasClass('disabled')){
                    // подсвечиваем незаполненные поля и форму не отправляем, если есть незаполненные поля
                    lightEmpty();
                    return false
                } else {
                    // Все хорошо, все заполнено, отправляем форму
                    alert('Ваш заказ оформлен успешно!Спасибо за вашу покупку!');
                    form.submit();
                }
            });
        });
    });

})( jQuery );

