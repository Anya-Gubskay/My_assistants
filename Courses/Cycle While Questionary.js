var lastName,
	firstName,
	patronymic,
	age;

while(true) {
	lastName = prompt('Ваша фамилия?');
	
	if (!lastName) {
		alert('Введите фамилию!');
	} else break;
}

while(true) {
	firstName = prompt('Ваше имя?');
	
	if (!firstName) {
		alert('Введите имя!');
	} else break;
}

while(true) {
	patronymic = prompt('Ваше отчество?');
	
	if (!patronymic) {
		alert('Введите отчество!');
	} else break;
}

while(true) {
	age = prompt('Ваш возраст в годах?');
	
	if (age === null || age === '' || isNaN(age)) {
		alert('Введите корректный возраст!');
	} else break;
}

var isMale = confirm('Ваш пол - мужской?');

alert(
	'Ваше ФИО: ' + lastName + ' ' + firstName + ' ' + patronymic + '\n' +
	'Ваш возраст в годах: ' + age + '\n' +
	'Ваш возраст в днях: ' + (age * 365) + '\n' +
	'Через 5 лет вам будет: ' + (age + 5) + '\n' +
	'Ваш пол: ' + (isMale ? 'мужской' : 'женский') + '\n' +
	'Вы на пенсии: ' + ((isMale && (age >= 63)) || (!isMale && (age >= 58)) ? 'да' : 'нет')
);