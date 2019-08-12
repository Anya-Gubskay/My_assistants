var btnsContainer = document.getElementsByClassName('buttons')[0],
    mainBtn = document.getElementById('main-button'),
    msContainer = document.getElementsByClassName('milliseconds')[0],
    secContainer = document.getElementsByClassName('seconds')[0],
    minContainer = document.getElementsByClassName('minutes')[0],
    marksContainer = document.getElementsByClassName('marks')[0],
    ms = 0,
    sec = 0,
    min = 0,
    initialTime = '00 : 00 : 00',
    endTime = '60 : 00 : 00',
    timer,
    time = localStorage.getItem('time'),
    state = localStorage.getItem('state'),
    marksCounter = 1,
    marks = [];

if (time && time !== endTime) {
    if (state === 'run' || state === 'stop') {
        setMainBtnState(state);
        drawAdditionalBtns();
    }

    setTime(time);

    if (state === 'run') {
        startTimer();
    }

    marks = marks.concat(JSON.parse(localStorage.getItem('marks')));
    drawMarks();
}

btnsContainer.onclick = function(event) {
    var target = event.target;

    if (target.tagName === 'BUTTON') {
        var time = getTime();

        switch(target.id) {
            case 'main-button':
                mainBtnActions();

                break;

            case 'save-button':
                marks.push(time);
                drawMarks();

                break;

            case 'reset-button':
                if (time === endTime) {
                    target.remove();
                    btnsContainer.appendChild(mainBtn);
                } else {
                    removeBtns(1);
                }
                setMainBtnState('start');

                stopTimer(timer);
                setTime(initialTime);

                marks = [];
                removeMarks();

                break;
        }
    }
};

function mainBtnActions() {
    switch(mainBtn.dataset.state) {
        case 'start':
            startTimer();

            setMainBtnState('run');
            drawAdditionalBtns();

            break;

        case 'run':
            stopTimer(timer);

            setMainBtnState('stop');

            break;

        case 'stop':
            startTimer();

            setMainBtnState('run');

            break;
    }
}

function setMainBtnState(state) {
    mainBtn.dataset.state = state;
    mainBtn.textContent = (state === 'start') ? 'Start' : (state === 'stop') ? 'Run' : 'Stop';
}

function drawAdditionalBtns() {
    btnsContainer.insertAdjacentHTML('beforeend', '<button id="save-button">Save</button><button id="reset-button">Reset</button>');
}

function removeBtns(index) {
    btnsContainer.children[index].remove();
    btnsContainer.children[index].remove();
}

function startTimer() {
    timer = setInterval(function () {
        ms++;

        if (ms === 100) {
            ms = 0;

            sec++;

            if (sec === 60) {
                sec = 0;

                min++;

                if (min === 60) {
                    removeBtns(0);

                    stopTimer();
                }

                minContainer.textContent = formatTimeParam(min);
            }

            secContainer.textContent = formatTimeParam(sec);
        }

        msContainer.textContent = formatTimeParam(ms);
    }, 10);
}

function stopTimer() {
    clearInterval(timer);
}

function setTime(time) {
    time = time.split(' : ');

    min = Number(time[0]);
    sec = Number(time[1]);
    ms = Number(time[2]);

    minContainer.textContent = time[0];
    secContainer.textContent = time[1];
    msContainer.textContent = time[2];
}

function getTime() {
    return formatTimeParam(min) + ' : ' + formatTimeParam(sec) + ' : ' + formatTimeParam(ms);
}

function formatTimeParam(param) {
    if (param >= 0 && param <= 9) {
        return '0' + param;
    } return param;
}

function drawMarks() {
    removeMarks();

    for (var i = 0; i < marks.length; i++) {
        marksContainer.insertAdjacentHTML('beforeend', '<div>' + marksCounter++ + ') ' + marks[i] + '</div>');
    }
}

function removeMarks() {
    marksCounter = 1;
    marksContainer.innerHTML = '';
}

window.onunload = function() {
    localStorage.setItem('time', getTime());
    localStorage.setItem('state', mainBtn.dataset.state);
    localStorage.setItem('marks', JSON.stringify(marks));
};