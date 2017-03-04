const firebase = require('firebase');

const config = require('../config');

firebase.initializeApp(config);

export default function login(credentials) {
    const { email, password } = credentials;
    return new Promise((resolve, reject) => {
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then((user) => {
                firebase.database().ref(`/users/${user.uid}`)
                    .on('value', snapshot => {
                        resolve(snapshot.val());
                    });
            })
            .catch((err) => {
                reject(err);
            });
    });
}
