import React from "react";
import {Link} from "react-router-dom";




class Form extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            reviews: [''],
            text: '',
            name: '',
        };
        // } else {
        //     this.state = {
        //         reviews: [],
        //         text: '',
        //         name: '',
        //     };
        // }
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
        (() => {this.clearForm()})();
        // ( () =>{this.setFireBase(); console.log(this.state.reviews)})();
    };

    sampleComponent = (item) => {
        return (
            <div>
                <p className="name">{item.name}</p>
                <p className="reviews">{item.text}</p>
            </div>

        );

    };

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

  setFireBase = () => {
        const nameRef = firebase.database().ref().child('reviews');
        nameRef.set(this.state.reviews);
      return null ;
};

    renderPostPreviews = () => {
        // console.log('lo');
            return this.state.reviews.map((item, i) => (this.sampleComponent(item)));
    };

   getFireBase = () => {
            firebase.database().ref().child('reviews').on('value', (snapshot) => {
                    this.setState({
                        reviews: snapshot.val()
                    })
            });
            return null;
    };
  // getFireBase = () => {
      // firebase.database().ref().child('reviews').on('value', (snapshot) => {
      //     const ref = (snapshot.val());


          // if (ref) {
          //     props.rewue = ref.map((item, i) => (
          //         <this.sampleComponent key={i} text={item.text} name={item.name}/>
          //     ));
              // } else return null;
              // })
          // }
  //     });
  //     return null;
  // };


  //     return null;
      // const nameRef = firebase.database().ref().child('Object');
      // nameRef.on('value', (snapshot) => {
      //    console.log(snapshot.val());
      //
      // })
  // };
  //   getFireBase = () => {
  //       const nameRef = firebase.database().ref();
  //       nameRef.on('value', (snapshot) => {
  //           snapshot.val().map((item, i) => (
  //               <this.sampleComponent  key = {i} text={item.text} name={item.name}/>
  //           ))}
  //       );
  //
  //       return null
  //   };

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

    render() {
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
                        </ul>
                    </div>
                </header>
                    <div className="container__reviews">
                        <this.getFireBase/>
                        <this.setFireBase/>
                        <this.renderPostPreviews/>
                    </div>

                {/*<this.clearForm/>*/}
                <div className="container__form">
                    <this.drawingForm addReviews={this.addReviews}
                                      state={this.state} sampleComponent={this.sampleComponent}/>
                </div>
            </div>
        )
    }

}

export default Form;
