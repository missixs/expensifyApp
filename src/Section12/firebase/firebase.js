import firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/auth';

// import * as firebase from 'firebase';

export const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN ,
  databaseURL: process.env.FIREBASE_DATABASE_URL,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.FIREBASE_APP_ID
};

firebase.initializeApp(firebaseConfig);
const database = firebase.database();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
const logAllDatabase = () => {

  //console.log('################### Here is snapshot of all contents of Database #############');
  //reading data 
  database.ref('expenses').once('value')
    .then((snapshot) => {
      const expenses = [];

      snapshot.forEach((childSnapshot) => {
        expenses.push({
          id: childSnapshot.key,
          ...childSnapshot.val()
        });
      });

      //console.log(expenses);
    });
    //console.log('###########################################################################');

}
//export { logAllDatabase, firebase, database , googleAuthProvider as default };
export { googleAuthProvider, logAllDatabase, firebase, database as default };