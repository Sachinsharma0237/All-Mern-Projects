import firebase from 'firebase/app';
import 'firebase/auth'

const config = {
    apiKey: "AIzaSyBJD_Ewjw1JgiE0JrZXXkXOmety6Ke8gu0",
    authDomain: "ssoadmin-dac44.firebaseapp.com",
    projectId: "ssoadmin-dac44",
    storageBucket: "ssoadmin-dac44.appspot.com",
    messagingSenderId: "792581644674",
    appId: "1:792581644674:web:6ce2030ac5e324a97eaf9b"
}

firebase.initializeApp(config);
export default firebase;