import firebase from 'firebase';
importScripts('https://www.gstatic.com/firebasejs/7.17.1/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/7.17.1/firebase-messaging.js');

const firebaseConfig = {
    apiKey: "AIzaSyBsw_8fMf1AMqJnnnoH-V0fnt_jyfEwTe8",
    authDomain: "quizapp7b.firebaseapp.com",
    projectId: "quizapp7b",
    storageBucket: "quizapp7b.appspot.com",
    messagingSenderId: "508597675302",
    appId: "1:508597675302:web:7c3692b21afe0063b08de7"
  };
  //
firebase.initializeApp( firebaseConfig );
firebase.messaging();

//let cacheData = "quizApp-7b";

this.addEventListener('activated',()=>{
    console.log('SW Activated')
})

this.addEventListener("install", (event) => {
    event.waitUntil(
        caches.open(cacheData).then((data) => {
            return data.addAll([
                "/",
                "index.html",
                "App.tsx",
                "App.css",
                "service_questions.tsx",
                "quiz_types.ts",
                "index.tsx",
                "swReg.js",
                "QuestionDisplay.tsx",
                "manifest.json",
                "sw.js",
                "firebase-messaging-sw.js"
            ]).catch((err)=>{
                console.log(err)
            });
        }).catch((err) => {
            console.log("err", err)
        })
    )
})

this.addEventListener("fetch", (event) => {
    //if (!navigator.onLine) {
        event.respondWith(
            caches.match(event.request).then((result) => {
                console.log("results:", result);
                if (result) {
                    return result||fetch(event.request);
                }
            })
        )
    //}
})