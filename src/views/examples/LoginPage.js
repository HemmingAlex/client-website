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




db.collection("news").add({
  lNews: "news",
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







// let firestore = firebase.firestore();

// const docRef = firestore.doc("news/latest");
//what?

class LoginPage extends React.Component {


  constructor(props) {
    super(props);
    // create a ref to store the textInput DOM element
    this.textInput = React.createRef();
    this.state = {
      lNews: '',
    }
  }


  //word test unsure


   newsChange = (event) => {
       this.setState({

   lNews: event.target.value
       })
       }
       


       submit = (event) => {
           alert(`this ${this.state.lNews}`);
           let lNews = this.state.lNews

       }  



  //word finished








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



//may puyt that in component




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

    // function add() 
    // {
    //   const textToSave = this.textInput.current.value;

    //   console.log("saving", textToSave, "to firestore")

    //   docRef.set({

    //     bookNews: textToSave
    //   }).then(
    //     function(){console.log("is this actually working?");}
    //   )
    // }


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
<FormGroup>
        <Label for="news">Latest news (text only)</Label>
        <hr/>
        <Input type="textarea" 
        name="text"
         id="news" 
         vlaue= {this.state.lNews}
         onChange={this.state.newsChange}
         placeholder={this.state.lNews}
          ref={this.textInput}/>
      </FormGroup>
      <Button onClick={this.add}>Submit</Button>

      {/* <input type="text" value={this.state.username} onChange={this.handleChange}> */}

      </Form>
      </div>
    );
  }
}
export default LoginPage;