import React, { useContext } from 'react'

import { IconX } from '../../../assets/icons/IconX'
import { IconO } from '../../../assets/icons/IconO'
import s from './Cell.module.css'
import { store } from '../../../context/store'
import { move } from '../../../utils/move'

export const Cell = ({type, row, col}) => {
    
    const { role, match, roomID } = useContext(store)

    const onMove = () => {        
        move(role, row, col, roomID)
    }

    switch (type) {
        case '_':
            return <div 
                className={s.cell} 
                onClick={role === match?._turn ? onMove : undefined}
            />
        case 'o':
            return <div 
                className={s.cell}
                children={<IconO />}
            />
        case 'x':
            return <div 
                className={s.cell} 
                children={<IconX />}
            />
        default:
            return <div className={s.cell} children={type} />
    }
    
}
