import firebase from 'firebase';
import {Redirect} from "react-router-dom";
import React from "react";


function Logout() {
    firebase.auth().signOut();

    return (<Redirect to='/login'/>)
}


export default Logout