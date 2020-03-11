import React, {useEffect, useState} from 'react';
import firebase from "firebase"
import Firestore from "./views/fire/firestore.jsx";

function Two() {
    const [times, setTimes] = useState([])

    useEffect(() => {
        firebase
        .firestore()
        .collection('mNews')
        .onSnapshot((snapshot) => {
            const newTimes = snapshot.docs.map((doc) =>({
                    id: doc.id,
                    ...doc.data()
                }))

                setTimes(newTimes)
             })
       },[]  )

        return times 
    }
    
    
    






const test = () => {

    const times = Two();


    return (
        <div>
            <ol>

                {times.map((time) =>
                
                <li key={time.id}>
{/* <div>{time.title}</div> */}

<div> {time.Lnews}</div>

{/* <code > {time.time_seconds}</code> */}
                </li>
                )}

            </ol>
        </div>
    )
}

export default test
