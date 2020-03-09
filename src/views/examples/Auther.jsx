

// Import FirebaseAuth and firebase.
import React from 'react';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import firebase from 'firebase';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

// Configure Firebase.
const config = {
  apiKey: "AIzaSyAmHgtoKJhYjr4L2VRTlYWwIJr-GVyk6s8",
  authDomain: "marcussloss.com.com",
  databaseURL: "https://marcussloss.com",
  projectId: "marcuoss-adf73",
  storageBucket: "marcuoss-adf73.appspot.com",
  messagingSenderId: "1083670325472",
  appId: "1:1083670325472:web:f5099b5855331640be0885",
  measurementId: "G-6G2TG44B1E"
  // ...
};
firebase.initializeApp(config);



var db = firebase.firestore();

//create a test collection of data here:
//(Create a new collection and a document using the following example code.)

// db.collection("users").add({
//   first: "Ada",
//   last: "Lovelace",
//   born: 1815
// })
// .then(function(docRef) {
//   console.log("Document written with ID: ", docRef.id);
// })
// .catch(function(error) {
//   console.error("Error adding document: ", error);
// });

// add something else to the doc
// ((((Now add another document to the users
//  collection. Notice that this document includes a key-value pair 
//  (middle name) that does not appear in the first document.
//  Documents in a collection can contain different sets of information. ))))

let news =""; 


db.collection("news").add({
  lNews: news,
  middle: "Mathison",
  last: "Turing",
  born: 1912
})
.then(function(docRef) {
  console.log("Document written with ID: ", docRef.id);
})
.catch(function(error) {
  console.error("Error adding document: ", error);
});

//the get
//

db.collection("users").get().then((querySnapshot) => {
  querySnapshot.forEach((doc) => {
      console.log(`${doc.id} => ${doc.data()}`);
  });
});



// read

db.collection("users").get().then((querySnapshot) => {
  querySnapshot.forEach((doc) => {
      console.log(`${doc.id} => ${doc.data()}`);
  });
});


///the rest of the rubbish







  // ((((( ----- authntication----
  // The component's Local state.
  state = {
    isSignedIn: false // Local signed-in state.
  };

  // Configure FirebaseUI.
  uiConfig = {
    // Popup signin flow rather than redirect flow.
    signInFlow: 'popup',
    // We will display Google and Facebook as auth providers.
    signInOptions: [
      firebase.auth.GoogleAuthProvider.PROVIDER_ID,
      firebase.auth.EmailAuthProvider.PROVIDER_ID
    ],
    callbacks: {
      // Avoid redirects after sign-in.
      signInSuccessWithAuthResult: () => false
    }
  };

  // Listen to the Firebase Auth state and set the local state.
  componentDidMount() {
    this.unregisterAuthObserver = firebase.auth().onAuthStateChanged(
        (user) => this.setState({isSignedIn: !!user})
    );
  }
  
  // Make sure we un-register Firebase observers when the component unmounts.
  componentWillUnmount() {
    this.unregisterAuthObserver();
  }
// )))))))    ---- all for authentication (its good)


