import firebase from 'firebase/app'
import 'firebase/firestore'


const firebaseConfig = {
  apiKey: "AIzaSyBIS3E-2eH4WjjnrchjAk-y8h7vpJ4rrHI",
  authDomain: "skate-planet.firebaseapp.com",
  projectId: "skate-planet",
  storageBucket: "skate-planet.appspot.com",
  messagingSenderId: "1079654947213",
  appId: "1:1079654947213:web:6c30985f099cb61a1e05c4"
};

const app = firebase.initializeApp(firebaseConfig);

export const getFirestore = () => {
    return firebase.firestore(app)
}