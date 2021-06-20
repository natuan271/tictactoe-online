import React from 'react'
import { Link } from 'react-router-dom'
import ParticlesBg from 'particles-bg'
import s from './Home.module.css'
import icon from "../../utils/icon";

export const Home = () => {
    let config = {
        num: [4, 7],
        rps: 1,
        radius: [5, 40],
        life: [1.5, 3],
        v: [2, 3],
        tha: [-50, 50],
        alpha: [0.6, 0],
        scale: [.1, 0.9],
        body: icon,
        position: "all",
        //color: ["random", "#ff0000"],
        cross: "dead",
        random: 10
      };
    return (
        <div className={s.home}>
            <ParticlesBg type="custom" config={config} bg={true}/>
            <ParticlesBg type="cobweb" bg={true} />
            <div className={s.form}>                

                <h1 className={s.title}>Tic Tac Toe </h1>

                <Link to='/create' >
                    <button className={s.create_btn}>Create Room</button>
                </Link>
                
                <Link to='/join'>
                    <button className={s.join_btn}>Join Room</button>
                </Link>
                <Link to='/history'>
                    <button className={s.history_btn}>History</button>
                </Link>
            </div>
            
        </div>
    )
}
