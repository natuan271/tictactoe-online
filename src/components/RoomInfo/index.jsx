import React, { useContext } from 'react'
import { store } from '../../context/store'
import { IconX } from '../../assets/icons/IconX'
import { IconO } from '../../assets/icons/IconO'
import s from './RoomInfo.module.css'
import { surreender } from '../../utils/surrender'

export const RoomInfo = () => {

    const { role, match, roomID, player } = useContext(store)


    const onSurrender = () => {
        surreender(role, roomID)
    }
    
    return (
        <div className={s.room_info} >
            <h2 className={s.title}>Room {roomID}</h2>
            <div className={`${s.player} ${match?._turn==='x' && s.turn_active}`} >
                <span>{player.X}</span>
                <IconX />
            </div>
            <div className={`${s.player} ${match?._turn==='o' && s.turn_active}`} >
                <span>{player.O}</span>
                <IconO />
            </div>
            <button className={s.surrender_btn} onClick={onSurrender} >Surrender</button>
        </div>
    )
}
