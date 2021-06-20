import React, { createContext, useEffect, useState } from 'react';
import { firestore } from '../services/firebase';

const store = createContext();
const { Provider } = store;

const StateProvider = ({ children }) => {

    const [roomID, setRoomID] = useState()      
    const [match, setMatch] = useState()
    const [player, setPlayer] = useState()
    const [role, setRole] = useState()
    
    useEffect(() => {        
        const unsubcrible = firestore
            .collection('rooms')
            .doc(roomID)
            .onSnapshot(
                snapshoot => {
                    const matchs = snapshoot.data()?.matchs
                    const X = snapshoot.data()?.playerX
                    const O = snapshoot.data()?.playerO                    
                    setPlayer({X, O})
                    setMatch(matchs ? matchs[matchs.length - 1] : undefined)
                },
                error => console.log(error)
            )
        
        return unsubcrible;
    }, [roomID])

    return <Provider value={{        
        roomID, setRoomID,        
        match, 
        role, setRole,
        player, setPlayer,        
    }}>{children}</Provider>;
};

export { store, StateProvider }