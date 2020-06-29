import firebase from 'firebase';
require('@firebase/firestore')


var firebaseConfig = {
    apiKey: "AIzaSyDF3p0ZIRAuV3mNhcv56HWqVwrXOa-hRPc",
    authDomain: "barterapp-d89c7.firebaseapp.com",
    databaseURL: "https://barterapp-d89c7.firebaseio.com",
    projectId: "barterapp-d89c7",
    storageBucket: "barterapp-d89c7.appspot.com",
    messagingSenderId: "140055150125",
    appId: "1:140055150125:web:b52ca3f6828695216e82a4"
  };

  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore();