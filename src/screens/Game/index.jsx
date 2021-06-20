import React from 'react'
import { BoardGame } from '../../components/BoardGame'
import { MoveRecord } from '../../components/MoveRecord'
import { RoomInfo } from '../../components/RoomInfo'
import { WinNotice } from '../../components/WinNotice'
import ParticlesBg from 'particles-bg'

import s from './Game.module.css'

export const Game = () => {        

    return (
        <div className={s.game} >
            <ParticlesBg type="cobweb" bg={true} />
            <WinNotice />
            <RoomInfo />
            <BoardGame />
            <MoveRecord />
        </div>
    )
}
