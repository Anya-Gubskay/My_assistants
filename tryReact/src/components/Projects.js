import React from "react";
import car from "./images/car.png";
import animal from "./images/animal.jpg";
import magic from "./images/magic.png";
import cartoon from "./images/cartoon.png";
import {Link} from "react-router-dom";
import fire from "./config/Fire";


class Projects extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isHovered1: false,
            isHovered2: false,
            isHovered3: false,
            isHovered4: false,
        };
        this.handleEnter = this.handleEnter.bind(this);
        this.handleLeave = this.handleLeave.bind(this);
    }

    handleEnter(event) {
        let target = event.target;
        if (target.tagName === 'IMG') {
            if (target.getAttribute('ALT') === "Мультики") {
                this.setState({
                    isHovered1: true
                });
            }
            if (target.tagName === 'IMG') {
                if (target.getAttribute('ALT') === "Фокусы") {
                    this.setState({
                        isHovered2: true
                    });
                }
            }
            if (target.tagName === 'IMG') {
                if (target.getAttribute('ALT') === "Животные") {
                    this.setState({
                        isHovered3: true
                    });
                }
            }
            if (target.tagName === 'IMG') {
                if (target.getAttribute('ALT') === "Машины") {
                    this.setState({
                        isHovered4: true
                    });
                }
            }
        }
    }
    logout = () =>{
        fire.auth().signOut();
    };

    handleLeave() {
        this.setState({
            isHovered1: false,
            isHovered2: false,
            isHovered3: false,
            isHovered4: false,
        });
    }

    drawingTable(props) {
        return (
            <div className="container__section__table" onMouseOver={props.handleEnter}
                 onMouseOut={props.handleLeave}>
                    <div className="caption-progects">
                        <p>Мои проекты</p>
                    </div>
                    <div className="box">
                        <div>
                            <p>Мультики</p>
                        </div>
                        {props.state.isHovered1 ? (
                            <div className="description">
                                <p>
                                    Этот проект разработан для тех, кто хочет полностью погрузится в историю мультиков и понять как их делали раньше и как сейчас.
                                </p>
                            </div>
                        ) : (
                            <div className="description">
                                <p>
                                    Наведите на картинку, что бы увидеть описание проекта.
                                </p>
                            </div>
                        )}
                        <div>
                            <a href="https://bigpicture.ru/?p=519186">
                            <img src={cartoon} alt="Мультики"/>
                            </a>
                        </div>
                    </div>
                    <div className="box">
                        <div>
                            <p>Мир фокусов</p>
                        </div>
                        {props.state.isHovered2 ? (
                            <div className="description">
                                <p>
                                    В проекте представлена страница с обучением фокусов, магазин фокусов, видео, книги,
                                    которые можно скачать а так же секреты необычных и загадочных фокусов.
                                </p>
                            </div>
                        ) : (
                            <div className="description">
                                <p>
                                Наведите на картинку, что бы увидеть описание проекта.
                                 </p>
                            </div>
                        )}
                        <div>
                            <a href="http://magiclesson.ru">
                                <img src={magic} alt="Фокусы"/>
                            </a>
                        </div>
                    </div>
                    <div className="box">
                        <div>
                            <p>Хищники</p>
                        </div>
                        {props.state.isHovered3 ? (
                            <div className="description">
                               <p>
                                   В данном проекте представлена галерея хищников, различные интересные книги и история, которые произошли на самом деле.
                               </p>
                            </div>
                        ) : (
                            <div className="description">
                                <p>
                                    Наведите на картинку, что бы увидеть описание проекта.
                                </p>
                            </div>
                        )}
                        <div>
                            <a href="https://mammals.ru/hischnye/">
                                <img src={animal} alt="Животные"/>
                            </a>
                        </div>
                    </div>
                    <div className="box">
                        <div>
                            <p>Машины мечты</p>
                        </div>
                        {props.state.isHovered4 ? (
                            <div className="description">
                               <p>
                                   Этот проект разрабатывался для любителей автомобилей, в нем представлены модели как различных машин,магазин запчастей, видео и много чего другого.
                               </p>
                            </div>
                        ) : (
                            <div className="description">
                                <p>
                                    Наведите на картинку, что бы увидеть описание проекта.
                                </p>
                            </div>
                        )}
                        <div>
                            <a href="https://amastercar.ru">
                                <img src={car} alt="Машины"/>
                            </a>
                        </div>
                    </div>
            </div>
        );
    }

    render() {
        return (
            <div className="container">
                <header className="container__header">
                    <div></div>
                    <div className="container__header__navigation">
                        <ul>
                            <li>
                                <Link to="/">Главная</Link>
                            </li>
                            <li>
                                <Link to="/progects">Мои проекты</Link>
                            </li>
                            <li>
                                <Link to="/reviews">Отзывы</Link>
                            </li>
                            <li>
                                <Link to="/" onClick={this.logout}>Выход</Link>
                            </li>
                        </ul>
                    </div>
                </header>
                <section className="container__section">
                    <this.drawingTable handleEnter={this.handleEnter} handleLeave={this.handleLeave}
                                       state={this.state}/>
                </section>
            </div>
        )
    }
}

export default Projects;