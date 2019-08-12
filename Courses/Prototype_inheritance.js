
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
    return 'Насыпаем в миску ' + this._getFormattedFoodAmount() + ' корма.';
};

Cat.prototype = Object.create(Animal.prototype);
Cat.prototype.constructor = Cat;

function Cat(name) {
    Animal.apply(this, arguments);
}

Cat.prototype.feed = function() {
    console.log(Animal.prototype.feed.apply(this,arguments) + '\n' + 'Кот доволен ^_^');
};

Cat.prototype.stroke = function() {
    console.log('Гладим кота.');
};

var barsik = new Cat('Барсик');
barsik.feed();