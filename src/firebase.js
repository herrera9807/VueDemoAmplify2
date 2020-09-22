import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyAG4_NmkbwrHlqBDd6tXS8Cv1b-ydc3iQU",
  authDomain: "test-vue-556c7.firebaseapp.com",
  databaseURL: "https://test-vue-556c7.firebaseio.com",
  projectId: "test-vue-556c7",
  storageBucket: "test-vue-556c7.appspot.com",
  messagingSenderId: "592693771666",
  appId: "1:592693771666:web:a0f773bff47b9a566b154b",
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore()
const auth = firebase.auth()
export { db, auth }