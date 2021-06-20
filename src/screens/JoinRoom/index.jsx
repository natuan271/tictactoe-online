import React, { useContext, useState} from 'react'
import { useHistory } from 'react-router-dom'
import { store } from '../../context/store'
import { joinRoom } from '../../utils/joinRoom'
import ParticlesBg from 'particles-bg'
import s from './JoinRoom.module.css'

export const JoinRoom = () => {

    const [room, setRoom] = useState()
    const [playerName, setPlayerName] = useState()  
    const [message, setMessage] = useState()
    const { setRoomID, setRole } = useContext(store)
    const history = useHistory()

    const onJoinRoom = async () => {
        const { msg, data } = await joinRoom(room, playerName)
                
        if (data) {
            setRoomID(data._id)
            setRole('o')
            history.push('/game')
        } else setMessage(msg)
        
    }

    return (
        <div className={s.form}>
            <ParticlesBg type="cobweb" bg={true} />
            <input 
                type='text' 
                placeholder='Room ID' 
                name="idRoom"
                className={s.form__field}
                onChange={e => setRoom(e.target.value)}
            /> 
            {message && <div style={{color:"#e21058"}}>{message}</div>}
            <input 
                type='text'
                placeholder='Your Name'
                name="name"
                className={s.form__field}
                onChange={e => setPlayerName(e.target.value)}
            />
            <button className={s.summit_btn} onClick={onJoinRoom} >Submit</button> 
        </div>
    )
}
