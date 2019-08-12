import React from 'react';
import Main from './components/Main';
import Login from './components/Login';
import Progects from './components/Projects';
import Form from './components/Form';
import fire from './components/config/Fire'
import {BrowserRouter as Router, Route} from "react-router-dom";

// class App extends React.Component {
//     render() {
//         return (
//             <div>
//                 <Router>
//                     <div>
//                         <Route exact path="/" component={Main}/>
//                         <Route path="/progects" component={Progects}/>
//                         <Route path="/reviews" component={Form}/>
//                     </div>
//                 </Router>
//             </div>
//         );
//     }
//
//
// }
//
// export default App;


class App extends React.Component {
    constructor() {
        super();
        this.state = ({
            user: null,
        });
        this.authListener = this.authListener.bind(this);
    }

    componentDidMount() {
        this.authListener();
    }

    authListener() {
        fire.auth().onAuthStateChanged((user) => {
            console.log(user);
            if (user) {
                this.setState({ user });
                localStorage.setItem('user', user.uid);
            } else {
                this.setState({ user: null });
                localStorage.removeItem('user');
            }
        });
    }
    render() {
        return (
            <div>
                <Router>
                    <div>
                        {this.state.user?
                        <Route exact path="/" component={Main}/>:
                            <Route exact path="/" component={Login}/>}
                        <Route path="/progects" component={Progects}/>
                        <Route path="/reviews" component={Form}/>
                    </div>
                </Router>
            </div>
        );
    }


}

export default App;

//
//     const config= {
//     apiKey: 'AIzaSyBuqC0DCxF5wbTmS--gkAb_E1u46qnnU8g',
//     authDomain: 'myprogect-6ac9c.firebaseapp.com',
//     databaseURL: 'https://myprogect-6ac9c.firebaseio.com',
//     projectId: 'myprogect-6ac9c',
//     storageBucket: 'myprogect-6ac9c.appspot.com',
//     messagingSenderId: '223462757056',
//     appId: '1:223462757056:web:9fdad5456186a30e'
// };
//     firebase.initializeApp(config);

// Your web app's Firebase configuration

//
// class App extends React.Component {
//     constructor(){
//         super();
//         this.state = {
//             name: 'Lehaa'
//         }
//     }
//     componentWillMount() {
//         const nameRef = firebase.database().ref().child('Object1').child('name');
//         nameRef.on('value', (snapshot) => {
//             this.setState({
//                 name:snapshot.val()
//             })
//         })
//
//
// }

    // componentWillMount() {
    //    firebase.database().ref().set ({
    //         name: 'Gena'
    //     });
    //
    // }

//     componentWillMount() {
//         const nameRef = firebase.database().ref();
//         nameRef.update({fer:'jey'})
//
// }
//     render() {
//
//        return (
//            <h1>Hello {this.state.name}!</h1>
//        )
//     }
//
//
// }
//
// export default App;