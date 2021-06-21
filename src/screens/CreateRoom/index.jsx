import React, { useContext, useState, useEffect } from 'react'
import { useHistory } from 'react-router'

import { store } from '../../context/store'
import { createRoom } from '../../utils/createRoom'
import ParticlesBg from 'particles-bg'
import s from './CreateRoom.module.css'

export const CreateRoom = () => {
    const [check,setCheck] = useState(false)
    const [playerName, setPlayerName] = useState()
    const { setRoomID, setRole } = useContext(store)
    const history = useHistory()
    
    useEffect(() =>{
        if (playerName === "") setCheck(false)
        else setCheck(true)
    },[playerName])

    const handleChange = (e) => {
        e.preventDefault()
        setPlayerName(e.target.value);
        if (playerName === "") {
            setCheck(false);
        }
        else {
            setCheck(true);
        }
      }

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
                    onChange={handleChange} 
                />
                {console.log(check)}
                {check ? <button className={s.summit_btn} onClick={onCreateRoom}>Submit</button> : <button style={{background:"gray"}} className={s.summit_btn}>Submit</button>}
                {/* <button className={s.summit_btn} onClick={onCreateRoom}>Submit</button> */}
            </div>
    )
}
