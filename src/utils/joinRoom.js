import { firestore } from "../services/firebase"

export const joinRoom = async (roomID, playerName) => {
    const query = firestore.collection('rooms').doc(roomID)   
        
    const room = (await query.get()).data()
    if (!room) return {msg: 'Room not found!'}
    else if (!room.canJoin) return {msg: 'Room enough player'}
    else {

        await query.update({
            playerO: playerName,
            canJoin: false,
        })

        return {data: room}
    }
}