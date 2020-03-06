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



let firestore = firebase.firestore();

const docRef = firestore.doc("news/latest");

class LoginPage extends React.Component {


  constructor(props) {
    super(props);
    // create a ref to store the textInput DOM element
    this.textInput = React.createRef();
  }


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




  render() {
    if (!this.state.isSignedIn) {
      return (
        <div>
          <h1>unsure if google link works</h1>
          <p>Please sign-in:</p>
          <StyledFirebaseAuth uiConfig={this.uiConfig} firebaseAuth={firebase.auth()}/>
        </div>
      );
    }

    function add() 
    {
      const textToSave = this.textInput.current.value;

      console.log("saving", textToSave, "to firestore")

      docRef.set({

        bookNews: textToSave
      }).then(
        function(){console.log("is this actually working?");}
      )
    }


    return (
      <div>
        <h1>HI</h1>
        <p>Welcome {firebase.auth().currentUser.displayName}! You are now signed-in!</p>


        <a onClick={() => firebase.auth().signOut()}>Sign-out</a>
        <br/>
        <br/>
        <br/>
        <br/>
<Form>
<FormGroup>
        <Label for="news">Latest news (text only)</Label>
        <hr/>
        <Input type="textarea" name="text" id="news" ref={this.textInput}/>
      </FormGroup>
      <Button onClick={this.add}>Submit</Button>



      </Form>
      </div>
    );
  }
}
export default LoginPage;