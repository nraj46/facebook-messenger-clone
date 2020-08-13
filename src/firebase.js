import firebace from "firebase"

const  firebaseapp = firebace.initializeApp({
    apiKey: "AIzaSyDtZSUblbkdly5pr1kLpjJgkhZQ5IEWnW4",
    authDomain: "facebook-messenger-clone-d420f.firebaseapp.com",
    databaseURL: "https://facebook-messenger-clone-d420f.firebaseio.com",
    projectId: "facebook-messenger-clone-d420f",
    storageBucket: "facebook-messenger-clone-d420f.appspot.com",
    messagingSenderId: "784493558361",
    appId: "1:784493558361:web:3778cf56ccafbc439a0f48",
    measurementId: "G-VYEERX0RXM"
});


const db = firebaseapp.firestore();

export { db} ;