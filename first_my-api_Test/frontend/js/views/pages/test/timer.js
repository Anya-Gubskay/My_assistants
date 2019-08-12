import ContentTest from "./content-test";
import Test from "../../../models/test";
import Component from "../../component";


class Timer extends Component {
    constructor(time, drawTime) {
        super();

        this.time = time;
        this.tick = drawTime;

        this.model = new Test();
        this.content = new ContentTest();
    }
    //Запуск таймера
    start() {
        const time = {time: this.time};

        this.model.moveTime(time);
        this.interval = setInterval(() => this.update(), 1000);
    }
    //Остановка таймера на странице About
    stopAboutTime() {
        clearInterval(this.interval)
    }
    //Остановка таймера
    stop() {
        clearInterval(this.interval);
        this.time = 60;
        const time = {time: this.time};
        this.model.moveTime(time);
    }
    //Прибавление секунды
    update() {
        if (location.hash === '#/' || location.hash === '#/test/result') {
            this.stopAboutTime();
        } else {
            if (this.time > 0) {
                this.time -= 1;
                this.tick && this.tick();

                const time = {time: this.time};
                this.model.moveTime(time);
            } else {
                this.stop();
                this.content.changePositionQuestion();
            }
        }
    }
    // вывод времени или остановка таймера
    get result() {
        if (location.hash === '#/' || location.hash === '#/test/result') {
            this.stopAboutTime();
        } else {
            return this.time;
        }
    }
}


export default Timer;
