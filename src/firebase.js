import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDKNvda7Ag-3b4QfCmva1rAjWYeaTnunhg",
    authDomain: "linkedin-clone-yt-655d7.firebaseapp.com",
    projectId: "linkedin-clone-yt-655d7",
    storageBucket: "linkedin-clone-yt-655d7.appspot.com",
    messagingSenderId: "761546568601",
    appId: "1:761546568601:web:a6625cdc7b1124ecc65908"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };