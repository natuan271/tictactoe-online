import React, { useContext } from 'react'
import { useHistory } from 'react-router'
import { store } from '../../context/store'
import { newMatch } from '../../utils/newMatch'
import ParticlesBg from 'particles-bg'
import icon2 from "../../utils/icon2";
import s from './WinNotice.module.css'

export const WinNotice = () => {

    const { match, player, roomID } = useContext(store)
    const history = useHistory()

    const onRestart = async () => {
        await newMatch(roomID)
    }

    if (!match?.winner) return <></>
    let config = {
        num: [4, 7],
        rps: 0.5,
        radius: [5, 40],
        life: [1.5, 3],
        v: [2, 3],
        tha: [-50, 50],
        alpha: [0.6, 0],
        scale: [.1, 0.9],
        body: icon2,
        position: "all",
        color: ["random", "#ff0000"],
        cross: "dead",
        random: 10
      };

    return (
        <div className={s.win_notice} >
            <ParticlesBg type="custom" config={config} bg={true}/>

            <div className={s.wrapper}>
                <div style={{fontSize:"24px"}}>
                    <h2>Winnner</h2>
                    <br/>
                    Winner is ${match?.winner === 'x' ? player.X : player.O}
                </div>
                <span>            
                    <button className={s.notice_btn} onClick={onRestart} >Restart</button>
                    <button className={s.notice_btn} onClick={() => history.push('/')}>New game</button>
                </span>

            </div>            
        </div>
    )
}
