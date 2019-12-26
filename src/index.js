import React from 'react';
import * as ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import firebase from 'firebase'

firebase.initializeApp({
    apiKey: "AIzaSyBfxjNjjsQKIoSHSj1ZNMIQ18HS1m0h6F4",
    authDomain: "lab7-chat.firebaseapp.com",
    databaseURL: "https://lab7-chat.firebaseio.com",
    projectId: "lab7-chat",
    storageBucket: "lab7-chat.appspot.com",
    messagingSenderId: "698623761262",
    appId: "1:698623761262:web:d47d37a0d755339d887f7f",
    measurementId: "G-12FSK5YH7F"
});

export const db = firebase.firestore();

ReactDOM.render(<App />, document.getElementById('root'));

