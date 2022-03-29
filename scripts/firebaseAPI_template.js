//----------------------------------------
//  Your web app's Firebase configuration
//----------------------------------------
var firebaseConfig = {
    // File stays on computer
    apiKey: "AIzaSyBDNZUPQCgl6uLnRoXrYcPmMtU6_37AYz0",
    authDomain: "fir-comp1800-d8111.firebaseapp.com",
    projectId: "fir-comp1800-d8111",
    storageBucket: "fir-comp1800-d8111.appspot.com",
    messagingSenderId: "930855711186",
    appId: "1:930855711186:web:5ba1c0a3785aaa1b9ad80b",
    measurementId: "G-45HM5W376Y"
};

//--------------------------------------------
// initialize the Firebase app
// initialize Firestore database if using it
//--------------------------------------------
const app = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();