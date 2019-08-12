// import React from "react";
// import {Link} from "react-router-dom";
// // import fire from './config/Fire'
//
//
//
// class Form extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             reviews: [],
//             text: '',
//             name: '',
//         }
//     }
//
//     addReviews = (props) => {
//         props.preventDefault();
//         this.setState(
//             {
//                 reviews: this.state.reviews.concat(
//                     [
//                         {name: this.state.name, text: this.state.text}
//                     ])
//             }
//         );
//         (() => {this.clearForm()})();
//     };
//
//     sampleComponent = (item) => {
//         return (
//             <div>
//                 <p className="name">{item.name}</p>
//                 <p className="reviews">{item.text}</p>
//             </div>
//
//         );
//
//     };
//
//     updateInputValue = (props) => {
//         if (props.target.tagName === "TEXTAREA") {
//             this.setState({
//                 text: props.target.value,
//             });
//         }
//         else {
//             this.setState({
//                 name: props.target.value
//             });
//         }
//
//
//     };
//     clearForm = () => {
//         this.setState({
//             text: ''
//         });
//         this.setState({
//             name: ''
//         });
//     };
//     componentWillMount() {
//         (() => {this.getStartLocol()})();
//     }
//
//     drawingForm = (props) => {
//         return (
//             <form>
//                 <p className="container__form__name">
//                     <label htmlFor="name">Имя:</label>
//                     <input type="text" id="name" name="name" onChange = {this.updateInputValue} value={props.state.name} placeholder="имя автора"/>
//                 </p>
//                 <p className="container__form__text">
//                     <textarea name="text"  onChange = {this.updateInputValue} value={props.state.text} placeholder="Текст сообщения"></textarea>
//                 </p>
//                 <p className="container__form__submit">
//                     <input type="submit" value="Отправить" onClick={props.addReviews}/>
//                 </p>
//             </form>
//         );
//     };
//
//     // getFire = () => {
//     //     const nameRef = fire.database().ref().child('reviews');
//     //           nameRef.set(this.state.reviews);
//     //           return null;
//     //
//     // };
//     // getFireJson = () => {
//     //       fire.database().ref().child('reviews').on('value', (snapshot) => {
//     //           snapshot.val() && (
//     //          snapshot.val().map((item, i) => (this.sampleComponent(item))))
//     //     });
//     // };
//     // getFireJson = () => {
//     //     firebase.database().ref().child('reviews').on('value', (snapshot) => {
//     //         snapshot.val() && (
//     //             snapshot.val().map((item, i) =>
//     //                 <this.sampleComponent  key = {i} text={item.text} name={item.name}/>))
//     //     });
//     // };
//
//     // getStartFire = () => {
//     //     fire.database().ref().child('reviews').on('value', (snapshot) => {
//     //         snapshot.val()&&
//     //         (this.setState({
//     //                reviews: snapshot.val()
//     //            }))
//     //     });
//     // };
//
//     getLocol = () => {
//         return localStorage.setItem("reviews", JSON.stringify(this.state.reviews))
//     };
//     getLocolJson = () => {
//        return  (JSON.parse(localStorage.getItem("reviews"))).map((item, i) => (
//            <this.sampleComponent  key = {i} text={item.text} name={item.name}/>
//        ))
//     };
//
//     getStartLocol = () => {
//
//      const start = JSON.parse(localStorage.getItem("reviews"));
//         (start)&&
//         this.setState({
//                reviews:start
//             })
//     };
//
//     render() {
//         const locol = this.getLocol();
//         const locolJson = this.getLocolJson();
//         // const fire = this.getFire();
//         // const fireJson = this.getFireJson();
//         return (
//             <div className="container">
//                 <header className="container__header">
//                     <div/>
//                     <div className="container__header__navigation">
//                         <ul>
//                             <li>
//                                 <Link to="/">Главная</Link>
//                             </li>
//                             <li>
//                                 <Link to="/progects">Мои проекты</Link>
//                             </li>
//                             <li>
//                                 <Link to="/reviews">Отзывы</Link>
//                             </li>
//                             <li>
//                                 <Link to="/" onClick={this.logout}>Выход</Link>
//                             </li>
//                         </ul>
//                     </div>
//                 </header>
//                 <div className="container__reviews">
//                     {locol}
//                     {/*{fire}*/}
//                     {locolJson}
//                     {/*{fireJson}*/}
//                 </div>
//                 <div className="container__form">
//                     <this.drawingForm addReviews={this.addReviews}
//                                       state={this.state} sampleComponent={this.sampleComponent}
//                                       updateInputValue={this.updateInputValue}/>
//                 </div>
//             </div>
//         )
//     }
//
// }
//
// export default Form;
//
//
import React from "react";
import {Link} from "react-router-dom";
import fire from './config/Fire'



class Form extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            reviews: [],
            text: '',
            name: '',
        }
    }

    addReviews = (props) => {
        props.preventDefault();
        this.setState(
            {
                reviews: this.state.reviews.concat(
                    [
                        {name: this.state.name, text: this.state.text}
                    ])
            }
        );
        (() => this.clearForm())();
    };

    sampleComponent = (item) => {
        (() => this.getFire())();
        return (
            <div>
                <p className="name">{item.name}</p>
                <p className="reviews">{item.text}</p>
            </div>

        );

    };
    componentWillMount() {
        this.getStartFire();
    }

    updateInputValue = (props) => {
        if (props.target.tagName === "TEXTAREA") {
            this.setState({
                text: props.target.value,
            });
        }
        else {
            this.setState({
                name: props.target.value
            });
        }

    };
    clearForm = () => {
        this.setState({
            text: ''
        });
        this.setState({
            name: ''
        });
    };

    drawingForm = (props) => {
        return (
            <form>
                <p className="container__form__name">
                    <label htmlFor="name">Имя:</label>
                    <input type="text" id="name" name="name" onChange = {this.updateInputValue} value={props.state.name} placeholder="имя автора"/>
                </p>
                <p className="container__form__text">
                    <textarea name="text"  onChange = {this.updateInputValue} value={props.state.text} placeholder="Текст сообщения"></textarea>
                </p>
                <p className="container__form__submit">
                    <input type="submit" value="Отправить" onClick={props.addReviews}/>
                </p>
            </form>
        );
    };

    getFire = () => {
        console.log('f');
        const nameRef = fire.database().ref().child('reviews');
        nameRef.set(this.state.reviews);

    };


    // };
    // getFireJson = () => {
    //       fire.database().ref().child('reviews').on('value', (snapshot) => {
    //           snapshot.val() && (
    //          snapshot.val().map((item, i) => (this.sampleComponent(item))))
    //     });
    // };

    // getFireJson = () => {
    //     fire.database().ref().child('reviews').on('value', (snapshot) => {
    //         const arrFire = snapshot.val();
    //         arrFire && (() => this.renderGetArr(arrFire))();
    //     });
    // };

    renderGetArr = () => {
        const { reviews } = this.state;
        return reviews.map((item, i) => {
            return <this.sampleComponent  key = {i} text={item.text} name={item.name}/>
        });

    };
    //
    getStartFire = () => {
        fire.database().ref().child('reviews').on('value', (snapshot) => {
            snapshot.val()&&
            (this.setState({
                reviews: snapshot.val()
            }))
        });
    };

    // getLocol = () => {
    //     return localStorage.setItem("reviews", JSON.stringify(this.state.reviews))
    // };
    // getLocolJson = () => {
    //    return  (JSON.parse(localStorage.getItem("reviews"))).map((item, i) => (
    //        <this.sampleComponent  key = {i} text={item.text} name={item.name}/>
    //    ))
    // };

    // getStartLocol = () => {

    //  const start = JSON.parse(localStorage.getItem("reviews"));
    //     (start)&&
    //     this.setState({
    //            reviews:start
    //         })
    // };
    logout = () =>{
        fire.auth().signOut();
    };
    render() {
        const { reviews } = this.state;
        // const locol = this.getLocol();
        // const locolJson = this.getLocolJson();
        // const fire = this.getFire();
        return (
            <div className="container">
                <header className="container__header">
                    <div/>
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
                <div className="container__reviews">
                    {/*/!* {locol} *!/*/}
                    {/*/!* {fire} *!/*/}
                    {/*/!* {locolJson} *!/*/}
                    {reviews ? <this.renderGetArr /> : null }
                </div>
                <div className="container__form">
                    <this.drawingForm addReviews={this.addReviews}
                                      state={this.state} sampleComponent={this.sampleComponent}
                                      updateInputValue={this.updateInputValue}/>
                </div>
            </div>
        )
    }

}

export default Form;