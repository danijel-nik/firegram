import * as firebase from 'firebase'
import 'firebase/storage'
import 'firebase/firestore'

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyCvB_4hyrblB3gbDUWnwaWoRWoII8NizTE",
    authDomain: "firegram-6a081.firebaseapp.com",
    projectId: "firegram-6a081",
    storageBucket: "firegram-6a081.appspot.com",
    messagingSenderId: "667489414167",
    appId: "1:667489414167:web:8268a5f305cb93d6570052"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const projectStorage = firebase.storage()
  const projectFirestore = firebase.firestore()

  export { projectStorage, projectFirestore }