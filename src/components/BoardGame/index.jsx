import React, { useContext } from 'react'
import { Cell } from './Cell'
import { store } from '../../context/store'
import { buildBoard } from '../../utils/buildBoard'
import s from './BoardGame.module.css'

export const BoardGame = () => {    

    const { match } = useContext(store)
    const board = buildBoard(match?.moveRecords)

    return (                    
        <div className={s.board_game} >

        {
            board.map((_e, i) => 
                <Cell key={i} type={_e} row={Math.floor(i/11)} col={i%11} />
            )  
        }
        </div>        
    )
}
