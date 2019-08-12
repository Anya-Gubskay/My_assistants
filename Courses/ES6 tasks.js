// Задание 6
// Использование перебирающих методов filter() и find()
// Использование поиска подстроки в строке
{
    function filterUsers(users) {
        const filteredInfo = {};

        filteredInfo['Пользователи младше 40'] = users.filter(user => user.age < 40);
        filteredInfo['Пользователь с именем Федор'] = users.find(user => user.name.startsWith('Fedor'));

        return filteredInfo;
    }

    filterUsers([
        {name: 'Vasya Pupkin', age: 25},
        {name: 'Ivan Petrov', age: 30},
        {name: 'Fedor Ivanov', age: 42}
    ]);
}

// Задание 7
// Использование перебирающего метода map()
// Использование стрелочной функции с 2 параметрами, 1 действием и возвратом объекта
// Использование динамического ключа объекта
{
    function mapUserInfo(userNames) {
        return userNames.map((username, i) => ({[`Пользователь ${i + 1}`]: username}));
    }

    mapUserInfo(['Alesya', 'Vasya', 'Piotr']);
}

// Задание 8
// Использование перебирающего метода reduce()
// Использование метода Object.assign()
{
    function concatObjects(objects) {
        return objects.reduce((previous, current) => Object.assign(previous, current), {});
    }

    concatObjects([
        {name: 'Vasya'},
        {name: 'Piotr', age: 25},
        {salary: '2000$'}
    ]);
}

// Задание 9
// Использование нового синтаксиса классов и наследования
// Использование шаблонных строк с вызовом функции
{
    class Animal {
        constructor(name) {
            this.name = name;
            this._foodAmount = 50;
        }

        _formatFoodAmount() {
            return `${this._foodAmount} гр.`;
        }

        dailyNorm(amount) {
            if (!arguments.length) return this._formatFoodAmount();

            if (amount < 50 || amount > 500) {
                return 'Недопустимое количество корма.';
            }

            this._foodAmount = amount;
        }

        feed() {
            console.log(`Насыпаем в миску ${this.dailyNorm()} корма.`);
        }
    }

    class Cat extends Animal {
        constructor(name) {
            super(arguments);
        }

        feed() {
            super.feed();

            console.log('Кот доволен ^_^');
            return this;
        }

        stroke() {
            console.log('Гладим кота.');
            return this;
        }
    }

    let barsik = new Cat('Барсик');

    console.log(barsik.feed().stroke().stroke().feed());

    barsik = null;
}