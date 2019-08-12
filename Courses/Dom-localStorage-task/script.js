localStorage.clear();

var container = document.getElementById('container'),
    button = document.getElementsByTagName('button')[0];

var firstPar = document.createElement('p'),
    secondPar = document.createElement('p');

firstPar.innerHTML = 'Hello, here are <a href="http://google.by">Link 1</a> and <a href="http://google.by">Link 2</a>';
secondPar.innerHTML = 'Hello, here are <a href="http://google.by">Link 3</a> and <a href="http://google.by">Link 4</a>';

container.appendChild(firstPar);
container.appendChild(secondPar);

button.addEventListener('click', firstParClick, false);
function firstParClick() {
    var links = firstPar.children;

    for (var i = 0; i < links.length; i++) {
        links[i].classList.add('changed');
    }
}

container.onclick = function(event) {
    var target = event.target;

    if (target.tagName === 'A' && target.parentNode === secondPar) {
        event.preventDefault();

        var linkInfo = localStorage.getItem(target.textContent);

        if (linkInfo) {
        	alert(JSON.parse(linkInfo).path);
		} else {
			localStorage.setItem(target.textContent, JSON.stringify({ path: target.getAttribute('href') }));
			alert('Информация о ссылке сохранена.');
		}
    }
};