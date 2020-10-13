import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'


const config = {
   apiKey: "AIzaSyDg0J9nf7a8GvrplHXf_ZKXd-YOqrAoUWA",
    authDomain: "jantashop-61db7.firebaseapp.com",
    databaseURL: "https://jantashop-61db7.firebaseio.com",
    projectId: "jantashop-61db7",
    storageBucket: "jantashop-61db7.appspot.com",
    messagingSenderId: "1097008645205",
    appId: "1:1097008645205:web:f7231a4c0292cbb6e5c0dc",
    measurementId: "G-YZC2EQCC3J"
}

firebase.initializeApp(config);
 export const auth = firebase.auth()
 export const firestore = firebase.firestore();

export const createUserProfileDocument= async (userAuth,additionalData)=>{
    if(!userAuth) return
    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapShot = await userRef.get()
    if(!snapShot.exists){
        try {
            const {displayName,email} = userAuth;
            const createdAt = new Date()
          await userRef.set({
              displayName,
              email,
                createdAt,
                ...additionalData,
            })
        } catch (error) {
            console.log('Error creating user: ',error.message)
        }
    }
     console.log(snapShot)
    return userRef
}

 
 const provider = new firebase.auth.GoogleAuthProvider();
 provider.setCustomParameters({prompt : 'select_account'})
 export const signInWithGoogle = ()=> auth.signInWithPopup(provider)

 export default firebase