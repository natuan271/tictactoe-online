import { firestore } from "../services/firebase"
import { isWin } from "./isWin"

export const move = async (player, row, col, roomID) => {    
    const query = firestore.collection('rooms').doc(roomID)
    const { matchs, score } = (await query.get()).data()
    matchs[matchs.length - 1].moveRecords?.push({
        player, row, col
    })
    const win = isWin(matchs[matchs.length-1].moveRecords, row, col, player)
    if (win){
        matchs[matchs.length-1].winner = player
        if (player === 'x') score[0]++
        else score[1]++
    }
    matchs[matchs.length - 1]._turn = player === 'x' ? 'o' : 'x';
    await query.update({matchs, score})
}