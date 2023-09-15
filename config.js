// firebase config key setup

import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import 'firebase/compat/firestore';

// your web app's firebase configuration

const firebaseConfig={
    apiKey: "AIzaSyDR22rh888RVkOO36qTbELzJ6VbOxgQ4lE",
    authDomain: "test-ffa1b.firebaseapp.com",
    projectId: "test-ffa1b",
    storageBucket: "test-ffa1b.appspot.com",
    messagingSenderId: "254917301925",
    appId: "1:254917301925:web:5439402272c2101b591f4c",
    measurementId: "G-GFFJ8JJVYQ"
}

if(!firebase.apps.length){
    firebase.initializeApp(firebaseConfig);
}

export {firebase};