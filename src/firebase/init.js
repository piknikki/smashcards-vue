import firebase from 'firebase'
// import firestore from 'firebase/firestore'

// Firebase configuration
var firebaseConfig = {
  apiKey: 'AIzaSyC6lRo0lG-zZPtwMlwHR217ikt1HLt87Is',
  authDomain: 'smash-cards-5c415.firebaseapp.com',
  databaseURL: 'https://smash-cards-5c415.firebaseio.com',
  projectId: 'smash-cards-5c415',
  storageBucket: 'smash-cards-5c415.appspot.com',
  messagingSenderId: '965883357432',
  appId: '1:965883357432:web:73c471182e0e0de9de330d'
}

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig)

// export the db
export default firebaseApp.firestore()
