import firebase from "firebase";

export function isUserAuthorized() {
    let authorized = false;

    const currentUser = firebase.auth().currentUser;
    if (currentUser && currentUser.uid) {
        authorized = true;
    }

    return authorized;
}


export function getUserName() {
    const currentUser = firebase.auth().currentUser;
    if (currentUser) {
        return currentUser.displayName
    }

    return null
}
