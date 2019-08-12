
// Палиндром
function isPalindrome(word) {
    return word.toLowerCase() === word.toLowerCase().split('').reverse().join('');
}

isPalindrome('шалаш'); // true

// Анаграммы
function areAnagrams(word1, word2) {
    return word1.toLowerCase().split('').sort().join('') === word2.toLowerCase().split('').sort().join('');
}

areAnagrams('кот', 'отк');

// Разделение массива на под-массивы (вариант 1)
function divideArr(arr, size) {
    var outputArr = [];

    for (var i = 0; i < arr.length; i += size) {
        outputArr.push(arr.slice(i, i + size));
    }

    return outputArr;
}

divideArr([1, 2, 3, 4, 5, 6, 7, 8], 3); // [[1, 2, 3], [4, 5, 6], [7, 8]]

// Разделение массива на под-массивы (вариант 2)
function divideArr(arr, size){
	var outputArr = [];

	while (arr.length) {
		outputArr.push(arr.splice(0, size));
	}

	return outputArr;
}

divideArr([1, 2, 3, 4, 5, 6, 7, 8], 3); // [[1, 2, 3], [4, 5, 6], [7, 8]]

// Подсчет кол-ва гласных в тексте (вариант 1)
function countVowelLetters(text) {

    text = text.toLowerCase();

    var vowelLetters = 'аяыиоёуюэеaeiouy',
        counter = 0;

    for (var i = 0; i < vowelLetters.len gth; i++) {
        for (var j = 0; j < text.length; j++) {
            vowelLetters[i] === text[j] && counter++;
        }
    }

    return counter;
}

countVowelLetters('Шла Саша по шоссе И сосала сУшку'); // 12

// Подсчет кол-ва гласных в тексте (вариант 2)
function countVowelLetters(text) {
    var vowelLettersArr = ['а', 'я', 'ы', 'и', 'о', 'ё', 'у', 'ю', 'э', 'е', 'a', 'e', 'i', 'o', 'u', 'y'],
        textArr = text.toLowerCase().split(''),
        counter = 0;

    for (var i = 0; i < textArr.length; i++) {
        vowelLettersArr.indexOf(textArr[i]) !== -1 && counter++;
    }

    return counter;
}

countVowelLetters('Шла Саша по шоссе И сосала сУшку'); // 12

// Подсчет количества букв в предложениях
function countSentencesLetters(text) {
    var sentences = text.split(/[.!?]+/);

    if (!(sentences[sentences.length - 1].length)) {
        sentences.pop();
    }

    for (var i = 0; i < sentences.length; i++) {
        console.log(sentences[i].trim() + ': Letters quantity is: ' + sentences[i].split(/[,\s]+/).join('').length);
    }
}

countSentencesLetters('Привет, Маша! Маша. Как дела, Маша?');

// Поиск максимально повторяющегося слова в тексте (вариант 1)
function findFrequentWord(story) {
    var storyWords = story.split(/[.,!?\s]+/),
        wordsArr = [];

    for (var i = 0; i < storyWords.length; i++) {
        var quantity = 0;

        for (var j = 0; j < storyWords.length; j++) {
            (storyWords[i] === storyWords[j]) && quantity++;
        }

        wordsArr.push({word: storyWords[i], quantity: quantity});
    }

    wordsArr.sort(function(a, b) {
        return b.quantity - a.quantity;
    });

    var firstWord = wordsArr[0];

    return 'Максимальное число повторений у слова \"' + firstWord.word + '\" - ' + firstWord.quantity + '.';
}

findFrequentWord('Привет, Маша! Маша... Как дела, Маша?');

// Поиск максимально повторяющегося слова в тексте (вариант 2)
function findFrequentWord(story) {
    var storyWords = story.split(/[.,!?\s]+/),
        repeatCounter = 0,
        repeatWord = '';

    for (var i = 0; i < storyWords.length; i++) {
        var counter = 1;

        for (var j = i + 1; j < storyWords.length; j++) {
            if (storyWords[i] === storyWords[j]) {
                counter++;
            }
        }

        if (counter > repeatCounter) {
            repeatCounter = counter;
            repeatWord = storyWords[i];
        }
    }

    return 'Максимальное число повторений у слова \"' + repeatWord + '\" - ' + repeatCounter + '.';
}

findFrequentWord('Привет, Маша! Маша... Как дела, Маша?');