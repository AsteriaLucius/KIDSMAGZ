import firebase from 'firebase/app'
import "firebase/auth"

const app = firebase.initializeApp({
    apiKey: "AIzaSyD5-Vp0ILTTdZ5t1ettANuOL2_MJaGiRMs",
    authDomain: "kidsmagz-bbcd6.firebaseapp.com",
    projectId: "kidsmagz-bbcd6",
    storageBucket: "kidsmagz-bbcd6.appspot.com",
    messagingSenderId: "905192609490",
    appId: "1:905192609490:web:62c1a4e285597b25f5bf0b",
    measurementId: "G-DF6JNMQKJR"
  })

export const auth = app.auth()
export default app