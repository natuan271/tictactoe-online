import { buildBoard } from '../utils/buildBoard'
export const isWin = (moveRecords=[], row, col, player) => {
    const board = buildBoard(moveRecords)

    let doc, ngang, cheo1, cheo2
    doc = ngang = cheo1 = cheo2 = 1
    let k = 1
    while (true){
        let flag = 0
        // doc
        if (row-k>0 && board[(row-k)*11 + col]===player) { doc++; flag++;}
        if (row+k<=10 && board[(row+k)*11 + col]===player) { doc++; flag++;}

        // ngang 
        if (col-k>0 && board[row*11 + (col-k)]===player) { ngang++; flag++} 
        if (col+k<=10 && board[row*11 + (col+k)]===player) { ngang++; flag++} 

        // cheo 1
        if (row-k>0 && col-k>0 && board[(row-k)*11 + col-k]===player) {cheo1++; flag++}
        if (row+k<=10 && col+k<=10 && board[(row+k)*11 + col+k]===player) {cheo1++; flag++}

        // Cheo 2
        if (row-k>0 && col+k<=10 && board[(row-k)*11 + col+k]===player) {cheo2++; flag++}
        if (row+k<=10 && col-k>0 && board[(row+k)*11 + col-k]===player) {cheo2++; flag++}

        if (flag === 0) break       
        k++         
    }

    if (doc>=5 || ngang>=5 || cheo1>=5 || cheo2 >= 5) return true
}