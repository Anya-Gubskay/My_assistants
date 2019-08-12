import Component from '../../../views/component';
import ContentTestTemplate from '../../../../templates/pages/test/content-test.hbs';
import Test from '../../../models/test';
import Timer from './timer';


class ContentTest extends Component {
    constructor() {
        super();

        this.model = new Test();
    }
    //Получаем данные с сервера
    getData() {
        return new Promise(resolve => this.model.getTest().then(test => {
            this.test = test;
            resolve(test)
        }));
    }
    //Отрисовываем основное содержимое страницы
    render(test) {
        const indexTest = this.test[0][10].index;

        ((indexTest === 0) && (test[0][11].time = 60));

        this.timerTest = new Timer(test[0][11].time, this.toInsertTime);

        return new Promise(resolve => resolve(ContentTestTemplate({
            test: test[0][indexTest],
            time: (test[0][11]),
            thanks: (indexTest > 9),
            containerTest: (indexTest <= 9),
            answerInput: (indexTest === 1 || indexTest === 2 || indexTest === 4 || indexTest === 6 || indexTest === 8 || indexTest === 10),
            answer: (indexTest === 0 || indexTest === 3 || indexTest === 5 || indexTest === 7 || indexTest === 9)
        })));
    }

    afterRender() {
        this.setActions();
        //Вызываем секундомер
        if (this.test[0][10].index <= 9) {
        this.timerTest.start();
       }
    }
    //Вставляем время в дом элемент
    toInsertTime() {
        document.getElementById('output').innerHTML = this.result;
    }
    //Останавливаем таймер
    stopTimer() {
        this.timerTest.stop();
    }


    setActions() {
        const testList = document.getElementsByClassName('test__list')[0],
            inputAnswer = document.getElementsByClassName('inputAnswer')[0],
            buttonAnswer = document.getElementsByClassName('buttonAnswer')[0];
        //Если ничего не написано - блокируем кнопку
        if (inputAnswer) {
            inputAnswer.addEventListener('keyup', () => {
                buttonAnswer.disabled = (!inputAnswer.value.trim())
            });
        }
        //Делегирование событий по нажатю на блок с ответами
        testList.addEventListener('click', event => {
            const target = event.target,
                targetClassList = target.classList;

            if (targetClassList.contains('test__list__answer')) {
                if (targetClassList.contains('right')) {
                    this.countRightAnswers();
                }

                if (!targetClassList.contains('result')) {
                    event.preventDefault();
                    this.changePositionQuestion();
                }

                if (inputAnswer) {
                    this.checkAnswerInput(inputAnswer);
                }
            }
            this.stopTimer();
        });
    }
    //Проверяем ответ теста введенный в поле ввода
    checkAnswerInput(inputAnswer) {
        const indexTest = this.test[0][10].index,
            textInput = inputAnswer.value;

        const arrIndexAnswer = [
            {index: '1', answer: /^Тригонометрия$/i},
            {index: '2', answer: /^Шахматист$/i},
            {index: '4', answer: /^Часы$/i},
            {index: '6', answer: /^Кастрюля$/i},
            {index: '8', answer: /^Таракан$/i},
        ];
        //Находим индекс
        let objIndex = arrIndexAnswer.find(obj => obj.index.includes(indexTest));
        //Находи по индексу регулярное выражение
        if(objIndex.answer.test(textInput)) {
            // Вызываем функцию подсчета правильных ответов
            this.countRightAnswers();
        }
    }
    // функция для смены индекса массива
    changePositionQuestion() {
        this.model.changePositionQuestion().then(() => {
            const contentContainer = document.getElementsByClassName('content-container')[0];

            this.getData().then(data => {
                this.render(data).then(html => {
                    contentContainer.innerHTML = html;
                    this.afterRender();
                });
            });

        });
    }
    //Функция подсчета правильных ответов
    countRightAnswers() {
        this.model.countRightAnswers()
    }
}

export default ContentTest;