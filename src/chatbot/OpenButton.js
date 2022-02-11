import React, { useState } from 'react'
import { ModalChat } from './ModalChat'

export const OpenButton = () => {


    const [showModal, setShowModal] = useState(true)
    
    const HandeButton = () => {
        setShowModal(!showModal)
    }

    return (
        <>
            <button onClick={HandeButton}>Open Chat</button>

            {
                showModal &&
                <ModalChat close={HandeButton}/>
            }
        </>
        
    )
}
