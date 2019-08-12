import Component from '../../views/component';
import AboutTemplate from '../../../templates/pages/about.hbs';
import Test from "../../models/test";
import QuestionsAnswersTest from "../../models/questions-answers-test";

class About extends Component {
    constructor() {
        super();

        this.model = new Test();
        this.testModel = new QuestionsAnswersTest();
    }
    //Получение данных с сервера
    getData() {
        return new Promise(resolve => this.model.getTest().then(test => {
            this.test = test;
            resolve(test)
        }));
    }
    //Отрисовывывание основного содержимого страницы
    render(test) {

        if (test.length !== 0) {
            return new Promise(resolve => resolve(AboutTemplate({
                testStart: (test[0][10].index === 0 || test[0][10].index > 9),
                testContinue: (test[0][10].index !== 0 && test[0][10].index <= 9)
            })));
        } else {
            return new Promise(resolve => resolve(AboutTemplate({testStart: true, testContinue: false})));
        }
    }

    afterRender() {
        this.moveTest();
    }

    moveTest() {
        const modelTest = this.testModel.listTest;
        //Передача данных на сервер
        if (this.test.length === 0) {
            this.model.moveTest(modelTest)
        }
        //Скидывание результатов
        if (this.test.length !== 0 && this.test[0][10].index > 9) {
            this.resetTest();
        }
    }

    resetTest() {
        this.model.resetTest()
    }
}

export default About;
