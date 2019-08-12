var tBody = document.getElementsByTagName('tbody')[0],
    addRowBtn = document.getElementById('addRow');

addRowBtn.onclick = addRow;
function addRow() {
    var newRow = document.createElement('tr'),
        firstRow = tBody.firstChild;

    newRow.innerHTML = '<td></td><td></td><td></td>';
    tBody.insertBefore(newRow, firstRow);

    //tBody.insertAdjacentHTML('afterBegin', '<tr><td></td><td></td><td></td></tr>')
}

tBody.addEventListener('click', insertInput, false);
function insertInput(event) {
    var target = event.target;

    if (target.tagName === 'TD' && target.id !== 'addRow') {
        target.innerHTML = '<input type="text" onblur="setText(event)" value="' + target.innerText + '">';
        tBody.getElementsByTagName('input')[0].focus();
    }
}

function setText(event) {
    var target = event.currentTarget;

    target.parentNode.innerHTML = target.value;
}

tBody.onkeypress = function(event) {
    if (event.keyCode === 13) {
        var input = tBody.getElementsByTagName('input')[0];
        input && input.blur();
    }
};