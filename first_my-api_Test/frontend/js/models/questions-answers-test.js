class QuestionsAnswersTest {
    constructor() {
        this.listTest = [
            {
                question: 'При падении чего принято загадывать желание?',
                answer1: {option: 'кирпича', result: 'wrong'},
                answer2: {option: 'доллара', result: 'wrong'},
                answer3: {option: 'звезды', result: 'right'},
                answer4: {option: 'цены', result: 'wrong'}
            },
            {
                question: 'Какое слово начинается с трёх букв "Г" и заканчивается трёмя буквами "Я"?'

            },
            {
                question: 'Кто ходит сидя?',
            },
            {
                question: 'Вы участвуете в марафоне и обогнали бегуна, бежавшего вторым. Какую позицию вы теперь занимаете?',
                answer1: {option: 'вторую', result: 'right'},
                answer2: {option: 'первую', result: 'wrong'},
                answer3: {option: 'третью', result: 'wrong'},
                answer4: {option: 'такое невозможно', result: 'wrong'}
            },
            {
                question: 'Что может в одно и то же время: стоять и ходить, висеть и стоять, ходить и лежать?',
            },
            {
                question: 'Какой рублики в отделе объявлений не существует?',
                answer1: {option: 'куплю', result: 'wrong'},
                answer2: {option: 'продам', result: 'wrong'},
                answer3: {option: 'сниму', result: 'wrong'},
                answer4: {option: 'одену', result: 'right'}
            },
            {
                question: 'На теле - два уха, а головы нет. ',
            },
            {
                question: 'Что показывает судья футболисту делая предупреждение?',
                answer1: {option: 'паспорт', result: 'wrong'},
                answer2: {option: 'Что-то непонятное для меня', result: 'wrong'},
                answer3: {option: 'язык', result: 'wrong'},
                answer4: {option: 'желтую карточку', result: 'right'}
            },
            {
                question: 'Какое домашнее животное начинается на "Т"?',
            },
            {
                question: 'Вы улыбнулись во время прохождения этого теста?',
                answer1: {option: 'Нет'},
                answer2: {option: 'Да'},
                answer3: {option: 'Как-то не получилось'},
                answer4: {option: 'Я сдержался'},
                link: '/result',
                classTest: 'result'
            },
            {
                index: 0,
                correct: 1,
                classJSBackwards: 'backwards',
            },
            {
                time: 60
            }

        ];

    }
}


export default QuestionsAnswersTest;

