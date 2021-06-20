import React, { useContext } from 'react'
import { store } from '../../context/store'

import s from './MoveRecord.module.css'

export const MoveRecord = () => {

    const rowLables = [' ', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J']
    const { match, player } = useContext(store)

    return (
        <div className={s.move_record} >
            <h2 className={s.title} >Move Record</h2>
            <div className={s.scroll}>
            {
                match?.moveRecords.map((_e, i) => 
                    <div className={`${s.move} ${_e.player==='x' ? s.red : s.green}`} key={i} >
                        <span className={s.name} >{_e.player==='x' ? player.X : player.O}</span>
                        <span>🠒</span>
                        <span className={s.step} >{_e.row}{rowLables[_e.col]}</span>
                    </div>
                )
            }
            </div>
            
        </div>
    )
}
