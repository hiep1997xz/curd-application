import firebase from 'firebase/app'
import 'firebase/database'

const firebaseConfig = {
  apiKey: 'AIzaSyAMfA6zsza8QqaZKis-74POG2URCIS7QrE',
  authDomain: 'react-contact-f2c7a.firebaseapp.com',
  projectId: 'react-contact-f2c7a',
  storageBucket: 'react-contact-f2c7a.appspot.com',
  messagingSenderId: '678226870940',
  appId: '1:678226870940:web:426f1f6feadc353e63a359',
}

const fireDb = firebase.initializeApp(firebaseConfig)
export default fireDb.database().ref()