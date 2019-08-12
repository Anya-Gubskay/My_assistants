function Cat(name) {
    var foodAmount = 50;

    function getFormattedFoodAmount() {
        return foodAmount + 'гр.';
    }

    this.dailyNorm = function(amount) {
        if (!arguments.length) return foodAmount;

        if (amount < 50 || amount > 500) {
            return 'Недопустимое количество корма.';
        }

        foodAmount = amount;
    };

    this.name = name;

    this.feed = function() {
        return 'Насыпаем в миску ' + getFormattedFoodAmount() + ' корма.';
    };
}

var barsik = new Cat('Барсик');

console.log(barsik.name);

console.log(barsik.dailyNorm());
console.log(barsik.feed());

console.log(barsik.dailyNorm(600));
console.log(barsik.feed());

console.log(barsik.dailyNorm(250));
console.log(barsik.feed());

barsik = null;

function Animal(name) {
    this._foodAmount = 50;
    this.name = name;
}

Animal.prototype._getFormattedFoodAmount = function () {
    return this._foodAmount + 'гр.';
};

Animal.prototype.dailyNorm = function(amount) {
    if (!arguments.length) return foodAmount;

    if (amount < 50 || amount > 500) {
        return 'Недопустимое количество корма.';
    }
    foodAmount = amount;
};

Animal.prototype.feed = function() {
    return 'Насыпаем в миску ' + _getFormattedFoodAmount() + ' корма.';
};

Cat.prototype = Object.create(Animal.prototype);
Cat.constructor = Cat;

function Cat(name) {
    Animal.apply(this, arguments);
}

Cat.prototype.feed = function() {
    console.log(feed() + '\n' + 'Кот доволен ^_^');
};

Cat.prototype.stroke = function() {
    console.log('Гладим кота.');
};

var barsik = new Cat('Барсик');

