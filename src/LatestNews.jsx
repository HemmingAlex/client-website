import React, { Component } from 'react'
import Style from "./views/Fiction.module.scss";
import firebase from 'firebase';
import Firestore from "./views/fire/firestore.jsx";
import {Button} from "reactstrap";
import Time from "./test.js";


var db = firebase.firestore();


               var docRef = db.collection("Marcus").doc("one")

            


            //    docRef.get().then( doc => {
            //     if (doc.exists) {
            //         console.log("Document data:", doc.data());
            //         let one = doc.data()
            //         this.setState({
            //             test: one,
            //             ...doc.data()
            //         });            
            //     } else {
            //         // doc.data() will be undefined in this case
            //         console.log("No such document!");
            //     }
            // }).catch(function(error) {
            //     console.log("Error getting document:", error);
            // }); 

 
            

// db.collection("marcus").limit(to :1)





//     firebaseRef.once('value')
//   .then((dataSnapshot) => {
//       this.setState({
//         messages: messages
//       });
//    });


//    let cityRef = db.collection('cities').doc('SF');
//    let getDoc = cityRef.get()
//      .then(doc => {
//        if (!doc.exists) {
//          console.log('No such document!');
//        } else {
//          console.log('Document data:', doc.data());
//        }
//      })
//      .catch(err => {
//        console.log('Error getting document', err);
//      });

 



 class LatestNews extends Component {



    constructor(props) {
        super(props)
    
        this.state = {
            test: ["this",]
               }};
        

               componentDidMount(){

                let cityRef = db.collection('Marcus').doc('one');
                let getDoc = cityRef.get()
                  .then(doc => {
                    if (!doc.exists) {
                      console.log('No such document!');
                      this.setState({
                                    test: doc.data()
                      });
    
                    } else {
                      console.log('Document data:', doc.data());
                    }
                  })
                  .catch(err => {
                    console.log('Error getting document', err);
                  });
               }

               componentDidUpdate(){
                let cityRef = db.collection('Marcus').doc('one');
                let getDoc = cityRef.get()
                  .then(doc => {
                    if (!doc.exists) {
                      console.log('No such document!');
                      this.setState({
                                    test: doc.data()
                      });
    
                    } else {
                      console.log('Document data:', doc.data());
                    }
                  })
                  .catch(err => {
                    console.log('Error getting document', err);
                  });
               }

    render() {
    

        let cityRef = db.collection('Marcus').doc('one');
        let getDoc = cityRef.get()
          .then(doc => {
            if (!doc.exists) {
              console.log('No such document!');
              this.setState({
                            test: doc.data()
              });

            } else {
              console.log('Document data:', doc.data());
            }
          })
          .catch(err => {
            console.log('Error getting document', err);
          });

        return (



            <div> <br/><br/><h1><i>LATEST NEWS!</i></h1>
                  <h1 className={Style.blue}>Marcus Sloss</h1>
                  {/* {this.state.test} */}

                  <h4>
                  <br/>
                  <strong><Time/></strong></h4>



<h4></h4>




            </div>
        )
    }
}

export default LatestNews;
