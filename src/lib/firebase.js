import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDYHEP67WxUUZMRJ3NEJrTGIfwHGoVG3qg",
  authDomain: "fir-sample-a04d1.firebaseapp.com",
  projectId: "fir-sample-a04d1",
  storageBucket: "fir-sample-a04d1.appspot.com",
  messagingSenderId: "3958416278",
  appId: "1:3958416278:web:bc2b547af6903d682373b7"
};

firebase.initializeApp(firebaseConfig);