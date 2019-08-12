var xInput = document.getElementById('x'),
    yInput = document.getElementById('y'),
    createBtn = document.getElementsByTagName('button')[0],
	body = document.body;

xInput.onkeyup = disableBtn;
yInput.onkeyup = disableBtn;
function disableBtn() {
    createBtn.disabled = !(xInput.value.trim() && yInput.value.trim());
}

createBtn.onclick = function() {
    var xValue = Number(xInput.value),
        yValue = Number(yInput.value);

    if (!(xValue && Number.isInteger(xValue) && xValue >=1 && xValue <= 10)) {
        resetForm([xInput]);
        showError(xInput);
    }
    
    if (!(yValue && Number.isInteger(yValue) && yValue >=1 && yValue <= 10)) {
        resetForm([yInput]);
        showError(yInput);
    }
    
    if (
    	(xValue && Number.isInteger(xValue) && xValue >=1 && xValue <= 10) &&
		(yValue && Number.isInteger(yValue) && yValue >=1 && yValue <= 10)
	) {
        resetForm([xInput, yInput]);
        drawChessTable(xValue, yValue);
    }
};

function showError(input) {
    alert('Введите корректное значение в поле ' + input.id.toUpperCase() + ' - целое число от 1 до 10.');
}

function resetForm(inputs) {
    for (var i = 0; i < inputs.length; i++) {
        inputs[i].value = '';
    }

    disableBtn();
}

function drawChessTable(xValue, yValue) {
    var table = document.getElementsByTagName('table')[0];

    if (table) {
        table.remove();
    }

    table = document.createElement('table');

    for (var i = 0; i < yValue; i++) {
        var tr = document.createElement('tr');

        for (var j = 0; j < xValue; j++) {
            var td = document.createElement('td');

            !((i + j) % 2) && td.classList.add('black');
            
            tr.appendChild(td);
        }

        table.appendChild(tr);
    }

    body.appendChild(table);
}

body.onclick = function(event) {
	var target = event.target;
	
	if (target.tagName === 'TD') {
		var tds = document.getElementsByTagName('td');
		
		for (var i = 0; i < tds.length; i++) {
			tds[i].classList.toggle('black');
		}
	}
};