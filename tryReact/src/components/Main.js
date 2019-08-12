import React from "react";
import smile from "./images/smile.jpg";
import {Link} from "react-router-dom";
import fire from './config/Fire'

class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value: 0};
    }

    increment() {
        this.setState({value: new Date().toLocaleTimeString()});
    }

    componentDidMount() {
        this.timerID = setInterval(() => this.increment(), 1000 / 100);
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }


    drawingImage() {
        return (
            <div className="container__header__image">
            <img src={smile} alt="smile"/>
            </div>
        )
    };

    drawingContacts() {
        return (
            <div className="container__footer__contacts">
                <div>
                    <a href="mailto:anya.gubskaya94@gmail.com">anya.gubskaya94@gmail.com</a>
                </div>
                <div>
                <a href="https://github.com/Anya-Gubskay">https://github.com/Anya-Gubskay</a>
                </div>
                <div>
                <a href="https://www.linkedin.com/in/anyagubskaya">https://www.linkedin.com/in/anyagubskaya</a>
                </div>
            </div>
        )
    }
    drawingTable() {
        return (
            <div className="container__article__table">
                <div className="container__article__table_first">
                    <div className="caption">
                        <p>ФИО</p>
                    </div>
                    <div>
                        <p>Губская Анна Павловна</p>
                    </div>
                </div>
                <div className="container__article__table_second">
                    <div className="caption">
                        <p>Курсы</p>
                    </div>
                    <div>
                        <p>Разработка веб-приложений с использованием JavaScript</p>
                    </div>
                    <div>
                        <p>Разработка веб-сайтов с использованием HTML, CSS и JavaScript</p>
                    </div>
                </div>
            </div>
        );
    }
    logout = () =>{
        fire.auth().signOut();
    };


    render() {
        const value = this.state.value;
        return (
            <div className="container">
                <header className="container__header">
                    <this.drawingImage/>
                    <div className="container__header__clock">{value}</div>
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
                <article className="container__article">
                    <this.drawingTable/>
                </article>
                <footer  className="container__footer">
                    <this.drawingContacts/>
                </footer>
            </div>
        )
    }

}

export default Main;


