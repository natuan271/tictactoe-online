import React, { useEffect, useState } from 'react'
import { history } from '../../utils/history'
import s from './History.module.css'
import ParticlesBg from 'particles-bg'
export const History = () => {
    
    const [list, setList] = useState()


    useEffect(() => {
        (async () => {
            setList(await history())
        })()
    }, [])
    

    return (
        <div className={s.history}>
            <ParticlesBg type="cobweb" bg={true} />
            <div className={s.history_table}>
                <h1 style={{paddingBottom:"2%"}}>Match history</h1>
                <div className={s.table_scroll}>
                    <table className={s.table}>
                        <thead style={{background:"black", color:"white"}}>
                            <tr>
                            <th scope="col">Room</th>
                            <th scope="col">Player 1</th>
                            <th scope="col">Score</th>
                            <th scope="col">Player 2</th>
                            </tr>
                        </thead>
                        <tbody>
                            {list && list.map(_e =>
                                <tr key={_e._id} >
                                    <th>{_e._id}</th>
                                    <th>{_e.playerX}</th>
                                    <th>{_e.score[0]} : {_e.score[1]}</th>
                                    <th>{_e.playerO}</th>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}
