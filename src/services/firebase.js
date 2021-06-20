import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyD88tgBV5QXyt-EgFUMS9fegmwswujGx8A",
    authDomain: "react-tictactoe-3ef19.firebaseapp.com",
    projectId: "react-tictactoe-3ef19",
    storageBucket: "react-tictactoe-3ef19.appspot.com",
    messagingSenderId: "565945084737",
    appId: "1:565945084737:web:7bf366587470952104cfc0",
    measurementId: "G-KWD9QMNSW0"
  };

firebase.initializeApp(firebaseConfig);
    

export const firestore = firebase.firestore();
export const auth = firebase.auth();
