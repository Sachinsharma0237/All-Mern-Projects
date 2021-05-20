import firebase from 'firebase';
const firebaseConfig = {
    apiKey: "AIzaSyBnmVFW0dSL6sX8sBPGGnWFAAP3ZQmWifY",
    authDomain: "resume-builder-f944c.firebaseapp.com",
    projectId: "resume-builder-f944c",
    storageBucket: "resume-builder-f944c.appspot.com",
    messagingSenderId: "174950889261",
    appId: "1:174950889261:web:ce8735ccc6f85724b705a4"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  export default firebaseApp;
