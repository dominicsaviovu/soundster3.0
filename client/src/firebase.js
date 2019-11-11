import firebase from 'firebase';

var config = {
  apiKey: "AIzaSyCEM4PMcSMLhPO8MG-z0Kn8frrkuM5l-cQ",
  authDomain: "soundster-b513a.firebaseapp.com",
  databaseURL: "https://soundster-b513a.firebaseio.com",
  projectId: "soundster-b513a",
  storageBucket: "soundster-b513a.appspot.com",
  messagingSenderId: ""
};
firebase.initializeApp(config);

export default firebase;