import { firestore } from "../services/firebase"

export const surreender = async (player, roomID) => {
    const query = firestore.collection('rooms').doc(roomID)
    const { matchs, score } = (await query.get()).data()
    matchs[matchs.length-1].winner = (player==='x' ? 'o' : 'x')
    if (player === 'x') score[1]++
    else score[0]++
    await query.update({matchs, score})
}