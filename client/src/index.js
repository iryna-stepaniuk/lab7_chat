import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import firebase from 'firebase'

firebase.initializeApp({
    apiKey: "AIzaSyD1voPHoDLS-wXsE5KX1p5DXOWUCKPF19U",
    authDomain: "testproject-fcaaf.firebaseapp.com",
    databaseURL: "https://testproject-fcaaf.firebaseio.com",
    projectId: "testproject-fcaaf",
    storageBucket: "testproject-fcaaf.appspot.com",
    messagingSenderId: "12418952429",
    appId: "1:12418952429:web:dc4d7c09460dd1ba40b0e4"
});

export const db = firebase.firestore();

ReactDOM.render(<App />, document.getElementById('root'));

