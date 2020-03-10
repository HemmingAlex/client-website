// Import FirebaseAuth and firebase.
import React from 'react';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import firebase, { firestore } from 'firebase';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

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
  
  export default firestore;