import * as firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/functions';
const config = {
  apiKey: "AIzaSyAFPEnkGxUHSs-xU5sDRP2CkHqr-1Uf9Dg",
  authDomain: "students-class-attendance.firebaseapp.com",
  databaseURL: "https://students-class-attendance.firebaseio.com",
  projectId: "students-class-attendance",
  storageBucket: "students-class-attendance.appspot.com",
  messagingSenderId: "843113262883",
  appId: "1:843113262883:web:5036689394a44273"
};

firebase.initializeApp(config);
const auth = firebase.auth();
const db = firebase.firestore();

const functions = firebase.functions();
export {firebase,auth,db,functions} ;