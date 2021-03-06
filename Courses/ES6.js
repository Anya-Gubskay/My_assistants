/********************************
  Деструктурирующее присваивание
********************************/
// ВАЖНО ПОМНИТЬ! КВАДРАТНЫЕ И ФИГУРНЫЕ СКОБКИ В ЛЕВОЙ ЧАСТИ ВЫРАЖЕНИЯ НЕ ГОВОРЯТ О ТОМ, ЧТО МЫ ОБЪЯВЛЯЕМ МАССИВ ИЛИ ОБЪЕКТ
// ОНИ ПРЕДНАЗНАЧЕНЫ ТОЛЬКО ДЛЯ "ГРУППИРОВКИ" ОБЪЯВЛЯЕМЫХ ПЕРЕМЕННЫХ

// РАБОТА С МАССИВАМИ
// В правой части выражения может быть и переменная с массивом
// Запись значений в переменные осуществляется последовательно
let [a,  , b] = [1, 2, 3];
// В a запишется 1-й элемент массива, в b - 3-й

[b, a] = [a, b];
// В b запишется значение переменной a, и наоборот, итого - a = 3 и b = 1

// РАБОТА С ОБЪЕКТАМИ
// В правой части выражения может быть и переменная с объектом
let {name, age, salary} = {name: 'Vasya', age: 25, salary: '2000$'};
// В левой части, если расписать подробнее - { name: name, age: age, salary: salary }
// Здесь ключи левого объекта - это имена ключей, по которым из объекта с правой стороны будут браться значения
// Значения левого объекта - это имена новых переменных
// Происходит как бы зеркальное присвоение значения
// Итого в переменную name запишется 'Vasya', в age - 25 и т.д.

// УСТАНОВКА ЗНАЧЕНИЙ ПО-УМОЛЧАНИЮ
const list = [1];
let [c = 0, d = 2] = list;
// В переменную c запишется 1-й элемент массива list
// Если бы его не было - записалось бы значение по-умолчанию 0
// В d запишется число 2, т.к. поскольку 2-й элемент у массива list отстутствует (undefined) - возьмется значение по-умолчанию

const obj = {x: 1};
let {x = 0, y = 2} = obj;
// В переменную x запишется значение по ключу x из объекта obj
// Если бы такого ключа в объекте справа не было - записалось бы значение по-умолчанию 0
// В y запишется число 2, т.к. поскольку в объекте obj нет такого ключа и соответственно значения (undefined) - возьмется
// значение по-умолчанию

// ПРИСВОЕНИЕ В ПАРАМЕТРЫ ФУНКЦИИ
// Последовательное присвоение - в name запишется 'string', в val - 25
function f1([name, val]) {
	console.log(name, val);
}
f1(['string', 25]);

// Аналог {name, val} = {name: 'string', val: 25} - см. выше
function f2({name, val}) {
	console.log(name, val);
}
f2({name: 'string', val: 25});

// n и v - это имена параметров (переменных грубо говоря)
// В переменную n запишется значение из переданного объекта по его ключу name, в v - по ключу val
function f3({name: n, val: v}) {
	console.log(n, v);
}
f3({name: 'string', val: 25});

/*********************
  Стрелочные функции
*********************/
// Всегда анонимные
// Работают с внешним контекстом this - замена var self = this;
const btn = document.getElementById('button');

btn.addEventListener('click', () => {
	console.log(this); // this будет являться не button, а в данной ситуации Window
}, false);

// Не имеют доступа к массиву arguments
const numbers = [1, 2, 3];

numbers.forEach(number => {
	console.log(arguments); // Uncaught ReferenceError: arguments is not defined
});

// Некоторые синтаксические особенности
// Если параметров 0 - пишутся просто круглые скобки
numbers.map(() => {});

// Если параметр 1 - он пишется без скобок
// Если выполняется одна операция - return - он не пишется, фигурные скобки для действий также не пишутся и вся функция
// записывается в одну строку
numbers.map(number => number + 1);

// Если происходит return объекта - его необходимо обернуть в круглые скобки
numbers.map(number => ({count: number}));

// Если параметров больше, чем 1 - они берутся в скобки
// Если выполняется несколько операций - return указывается, фигурные скобки для действий пишутся и функция записывается
// в несколько строк
numbers.map((number, i) => {
	number += i;
	
	return number;
});

/***********************
  Класс String - Поиск
***********************/
// МЕТОД startsWith()
// С одним параметром - проверяет, начинается ли строка на данную подстроку
// Второй параметр задает индекс, на котором должна находиться данная подстрока
'Hello'.startsWith('Hell'); // true
'Hello'.startsWith('ello'); // false

'Hello'.startsWith('ello', 1); // true

// МЕТОД endsWith()
// С одним параметром - проверяет, заканчивается ли строка на данную подстроку
// Второй параметр задает индекс, до которого (не включительно!) должна находиться данная подстрока
'Hello'.endsWith('ello'); // true
'Hello'.endsWith('hell'); // false

'Hello'.endsWith('hell', 4); // true

// МЕТОД includes()
// С одним параметром - проверяет, содержится ли где-нибудь в строке данная построка
// Второй параметр задает индекс, начиная с которого осуществлять поиск (подстрока необязательно должна начинаться
// именно с данного индекса, она может находиться и правее
'Hello'.includes('ell'); // true

'Hello'.includes('ell', 1); // true
'Heello'.includes('ell', 1); // true
'Heello'.includes('ell', 3); // false

/**************
  Класс Array
**************/
// МЕТОД includes()
// С одним параметром - проверяет, есть ли в массиве такой элемент
// Второй параметр задает индекс, начиная с которого осуществлять поиск (элемент необязательно должен находиться именно
// на данной позиции, он может находиться и правее
const arr = [1, 2, 3];

arr.includes(3); // true
arr.includes(4); // false

arr.includes(3, 1); // true
arr.includes(3, 2); // true
arr.includes(3, 3); // false

// ЦИКЛ For of - используется только для массивов, для перебора его значений
for (let value of arr) {
	console.log(value);
} // 1, 2, 3

// МЕТОД find()
// Работает аналогично методу filter(), но возвращает не новый массив подошедших под условие элементов, а только первое
// найденное совпадение
// Как и все перебирающие методы может принимать в себя элемент массива, число итерации и сам массив
const objectsArr = [
	{name: 'Piotr'},
	{name: 'Vasya'},
	{name: 'Piotr'}
];

let foundObj = objectsArr.find(obj => obj.name === 'Piotr');
console.log(foundObj); // {name: 'Piotr' }

// Аналогично
foundObj = objectsArr.filter(obj => obj.name === 'Piotr')[0];