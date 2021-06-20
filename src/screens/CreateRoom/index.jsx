import React, { useContext, useState } from 'react'
import { useHistory } from 'react-router'

import { store } from '../../context/store'
import { createRoom } from '../../utils/createRoom'
import ParticlesBg from 'particles-bg'
import s from './CreateRoom.module.css'

export const CreateRoom = () => {

    const [playerName, setPlayerName] = useState()
    const { setRoomID, setRole } = useContext(store)
    const history = useHistory()

    const onCreateRoom = async () => {
        const newRoomID = await createRoom(playerName)
        console.log(newRoomID);
        setRoomID(newRoomID)
        setRole('x')
        history.push('/game')
    }
    
    return (
            <div className={s.form}>
                <ParticlesBg type="cobweb" bg={true} />
                <input 
                    type='text' 
                    placeholder='Your name' 
                    className={s.form__field}
                    onChange={e => setPlayerName(e.target.value)} 
                    required
                />
                <button className={s.summit_btn} onClick={onCreateRoom}>Submit</button>
            </div>
    )
}
