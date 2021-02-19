import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyBsw_8fMf1AMqJnnnoH-V0fnt_jyfEwTe8",
    authDomain: "quizapp7b.firebaseapp.com",
    projectId: "quizapp7b",
    storageBucket: "quizapp7b.appspot.com",
    messagingSenderId: "508597675302",
    appId: "1:508597675302:web:7c3692b21afe0063b08de7"
  };

firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging()

export function configureNotification() {
    Notification.requestPermission().then((permission) => {
        console.log('permission', permission);
        if (permission === "granted") {
            messaging.getToken().then((currentToken) => {
                if (currentToken) {
                    console.log('TOKEN:', currentToken)
                    // Send the token to your server and update the UI if necessary
                    // ...
                } else {
                    // Show permission request UI
                    console.log('No registration token available. Request permission to generate one.');
                    // ...
                }
            }).catch((err) => {
                console.log('An error occurred while retrieving token. ', err);
                // ...
            });
        }
    })
}