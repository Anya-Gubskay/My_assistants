import firebase from 'firebase';

const config= {
    apiKey: 'AIzaSyBuqC0DCxF5wbTmS--gkAb_E1u46qnnU8g',
    authDomain: 'myprogect-6ac9c.firebaseapp.com',
    databaseURL: 'https://myprogect-6ac9c.firebaseio.com',
    projectId: 'myprogect-6ac9c',
    storageBucket: 'myprogect-6ac9c.appspot.com',
    messagingSenderId: '223462757056',
    appId: '1:223462757056:web:9fdad5456186a30e'
};


const fire = firebase.initializeApp(config);
export default fire;