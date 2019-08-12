class Test {
    getTest() {
        return new Promise((resolve, reject) => {
            const xhr = new XMLHttpRequest();

            xhr.open('GET', 'http://localhost:3000/api/test', true);

            xhr.onload = () => {
                try {
                    resolve(JSON.parse(xhr.response));
                } catch (error) {
                   reject(alert (error.name + ' - ' + error.message));
                }
            };
            xhr.send();
        });
    }


    changePositionQuestion() {
        return new Promise(resolve => {
            const xhr = new XMLHttpRequest();

            xhr.open('PUT', `http://localhost:3000/api/test`, true);

            xhr.onload = () => resolve();

            xhr.send();
        });
    }

    moveTest(modelTest) {
        return new Promise(resolve => {
            const xhr = new XMLHttpRequest();

            xhr.open('POST', `http://localhost:3000/api/`, true);
            xhr.setRequestHeader('Content-Type', 'application/json');

            xhr.onload = () => resolve();

            xhr.send(JSON.stringify(modelTest));

        });
    }

    moveTime(time) {
        return new Promise(resolve => {
            const xhr = new XMLHttpRequest();

            xhr.open('POST', `http://localhost:3000/api/test`, true);
            xhr.setRequestHeader('Content-Type', 'application/json');

            xhr.onload = () => resolve();

            xhr.send(JSON.stringify(time));

        });
    }

    resetTest() {
        return new Promise(resolve => {
            const xhr = new XMLHttpRequest();

            xhr.open('PUT', `http://localhost:3000/api/test/result`, true);

            xhr.onload = () => resolve();

            xhr.send();
        });
    }

    countRightAnswers() {
        return new Promise(resolve => {
            const xhr = new XMLHttpRequest();

            xhr.open('PUT', `http://localhost:3000/api/test1`, true);

            xhr.onload = () => resolve();

            xhr.send();
        });
    }
}

export default Test;