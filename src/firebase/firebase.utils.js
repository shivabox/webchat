import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// Your web app's Firebase configuration
const config = {
    apiKey: "AIzaSyDQTlXchUScVsMtML-MWxeTHY6YPP-vK6Q",
    authDomain: "webchat-845ec.firebaseapp.com",
    databaseURL: "https://webchat-845ec.firebaseio.com",
    projectId: "webchat-845ec",
    storageBucket: "webchat-845ec.appspot.com",
    messagingSenderId: "79640630849",
    appId: "1:79640630849:web:5ecbc539a04062c13498c0"
  };

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if(!snapShot.exists){
    const {displayName, email} = userAuth;
    const createdAt = new Date();

    try{
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      }) 
    } catch (error){
        console.log('error creating user', error.message); 
    }
  }
  return userRef;
}

  // Initialize Firebase
  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();
  
  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt:'select_account'});
  export const signInWithGoogle = () => auth.signInWithPopup(provider);
  
  export default firebase;