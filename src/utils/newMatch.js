import { firestore } from "../services/firebase"

export const newMatch = async roomID => {
    const qr = firestore.collection('rooms').doc(roomID)
    const { matchs } = (await qr.get()).data()
    matchs.push({
        _turn: 'x',
        moveRecords: []       
    })
    await qr.update({matchs})
}