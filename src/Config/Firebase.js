import * as firebase from 'firebase';
import firestore from 'firebase/firestore'

const settings = {timestampsInSnapshots: true};

const firebaseConfig = {
    apiKey: "AIzaSyA8S_7viPkh0ahh_-XQJsQIA1w8fQgg2s4",
    authDomain: "foodizia.firebaseapp.com",
    databaseURL: "https://foodizia.firebaseio.com",
    projectId: "foodizia",
    storageBucket: "",
    messagingSenderId: "180824940087",
    appId: "1:180824940087:web:2f5a3d0d650917e5"
  };
firebase.initializeApp(firebaseConfig);

firebase.firestore().settings(settings);

export default firebase;