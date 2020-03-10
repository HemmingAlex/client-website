import React, { Component } from 'react'
import Style from "./views/Fiction.module.scss";
import firebase from 'firebase';
import Firestore from "./views/fire/firestore.jsx";
import {Button} from "reactstrap";

var db = firebase.firestore();


               var docRef = db.collection("Marcus").doc("one")


               docRef.get().then(function(doc) {
                if (doc.exists) {
                    console.log("Document data:", doc.data());
                    this.state.farts = doc.data();
            
                } else {
                    // doc.data() will be undefined in this case
                    console.log("No such document!");
                }
            }).catch(function(error) {
                console.log("Error getting document:", error);
            }); 



// db.collection("marcus").limit(to :1)



function news() {

    docRef.get().then(function(doc) {
        if (doc.exists) {
            this.state.farts = doc.data();
    
        } else {
            // doc.data() will be undefined in this case
            console.log("No such document!");
        }
    }).catch(function(error) {
        console.log("Error getting document:", error);
    });
        }



 class LatestNews extends Component {



    constructor(props) {
        super(props)
    
        this.state = {
            farts: "input"
               }}
        

    componentDidMount() {

    
        docRef.get().then(function(doc) {
            if (doc.exists) {
                this.state.farts = doc.data();
        
            } else {
                // doc.data() will be undefined in this case
                console.log("No such document!");
            }
        }).catch(function(error) {
            console.log("Error getting document:", error);
        });
    }


    componentDidUpdate() {

            
docRef.get().then(function(doc) {
    if (doc.exists) {
        this.state.farts = doc.data();

    } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
    }
}).catch(function(error) {
    console.log("Error getting document:", error);
});
    }


    
    



    render() {
    

        return (



            <div> <br/><br/>
                  <h1 className={Style.blue}>Marcus Sloss</h1>  

                  <h1>{this.state.farts}</h1>

<h1><i>LATEST NEWS!</i></h1>

<h4>CyberViking is half way done, here is the cover. <br/>   
    Audiobooks are in production with Gryff needing approval from ACX. 
    Logan 3 releases 3/6/20.</h4>


<Button onClick={this.newws}> update news</Button>


            </div>
        )
    }
}

export default LatestNews;
