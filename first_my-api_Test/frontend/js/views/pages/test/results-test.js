import Component from '../../../views/component';
import ResultsTestTemplate from '../../../../templates/pages/test/results-test.hbs';
import Test from '../../../models/test';


class ResultsTest extends Component {
    constructor() {
        super();

        this.model = new Test();
    }
    //Получаем данные с сервера
    getData() {
        return new Promise(resolve => this.model.getTest().then(test => resolve(test)));
    }
    //Отрисовываем основное содержимое страницы
    render(test) {
        this.model.changePositionQuestion();
        const correctTest = test[0][10].correct;

        return new Promise(resolve => resolve(ResultsTestTemplate(
            {
                test: test[0][10],
                result1: (correctTest <= 3),
                result2: ((correctTest >= 4) && (correctTest <= 7)),
                result3: (correctTest >= 8)
            })));
    }
}


export default ResultsTest;