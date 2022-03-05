import firebase from 'firebase'

console.log(firebase)
const firebaseConfig = {
    apiKey: "AIzaSyD41Kcdp3iBMmgrhMtm8a0aj_X78F-J2A4",
    authDomain: "linkedin-app-clone-35e45.firebaseapp.com",
    projectId: "linkedin-app-clone-35e45",
    storageBucket: "linkedin-app-clone-35e45.appspot.com",
    messagingSenderId: "899463501766",
    appId: "1:899463501766:web:9e97fc173300e7340544c7"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig)
  const db = firebaseApp.firestore()
  const auth = firebase.auth()

export { db, auth }