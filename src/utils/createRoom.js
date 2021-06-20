import { firestore } from '../services/firebase'
import { newMatch } from './newMatch'

export const createRoom = async playerName => {
    const roomID = Date.now().toString().slice(-9, -3)
    
    await firestore
        .collection('rooms')
        .doc(roomID)
        .set({
            _id: roomID,            
            playerX: playerName,
            canJoin: true,
            matchs: [],
            score: [0, 0]
        })
    await newMatch(roomID)
    return roomID
}