import firebase from 'firebase';
const firebaseConfig = {
    apiKey: "AIzaSyAMWZr1FrM-A6FWJjag4Gw7UwUd6hR0vnQ",
    authDomain: "opensenselabs.firebaseapp.com",
    projectId: "opensenselabs",
    storageBucket: "opensenselabs.appspot.com",
    messagingSenderId: "848829792775",
    appId: "1:848829792775:web:25024bc9e8ed585a1460a2",
    measurementId: "G-XGP61ZRNJD"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  export default firebaseApp;