import React, {useEffect, useState} from 'react';
import firebase from "firebase"
import Firestore from "./views/fire/firestore.jsx";

function useTimes () {

    conste [times, setTimes] = useState([])

    useEffect(() => {

        firebase
        .firestore()
        .collection("times")
        .onSnapshot((snapshot) => {

            const newTimes =snapshot.docs.map((doc) =>
            (
                {
                    id: doc.id,
                    ...doc.data()
                }))
                setTimes(newTimes)

        })
        },    [])

        return times
    
    
    






function test() {
    return (
        <div>
            <ol>

                {times.map((time) =>
                
                <li key={time.id}>
<div>{time.title}</div>

<code > {time.time_seconds}</code>
                </li>
                )}

            </ol>
        </div>
    )
}

export default test
