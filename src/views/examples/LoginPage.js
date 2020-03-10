// Import FirebaseAuth and firebase.
import React from 'react';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import firebase from 'firebase';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import Firestore from "../fire/firestore.jsx";

// Configure Firebase.



var db = firebase.firestore();




class LoginPage extends React.Component {


  constructor(props) {
    super(props);
    // create a ref to store the textInput DOM element
    // this.textInput = React.createRef();
    this.state = {
      word: '',
      isSignedIn: false
    }
  }









  // ((((( ----- authntication----
  // The component's Local state.
  // state = {
  //   isSignedIn: false // Local signed-in state.
  // };

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



//may puyt that in component




newsChange = (event) => {
  this.setState({
    word: event.target.value
  })
  }
  

  submit = event => {
   alert(`this ${this.state.word} ha`)
   event.preventDefault()
   
               db.collection("times").doc("one").set({  
             Lnews: `${this.state.word}`
            })
           

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


    

    return (
      <div>
        <h1>HI</h1>
        <p>Welcome {firebase.auth().currentUser.displayName}! You are now signed-in!</p>


        <a onClick={() => firebase.auth().signOut()}>Sign-out</a>
        <br/>
        <br/>
        <br/>
        <br/>



<Form onSubmit={this.submit}>
        <label >Latest news (text only)</label>



        <hr/>



        <Input type="textarea" 
  value= {this.state.word}
  onChange= {this.newsChange}/>



      <Button type="submit"> Submit </Button>

      </Form>
      </div>
    );
  }
}
export default LoginPage;