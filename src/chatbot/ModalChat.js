import React, { useState } from 'react'
import './chat.css'
import {data} from './data'

export const ModalChat = ({close}) => {

    const [option, setOption] = useState(data[0])
    console.log(option);

    const handleClick = () => {
        setOption(data[2])
    }

    return (
        <div className='containerModal'>
            <div className='modalWindow'>
                <div className='modalHeader'>
                    <div className='modalTitle'>Chatbot</div>
                    <div className='modalClose' onClick={close}>X</div>
                </div>

                <div className='modalChatContainer'>
                    <div className='messageBot'>
                        {option.message}
                    </div>

                    {option.options.map((x, i) => 
                        <div key={i} onClick={handleClick} className='messageUser'>
                            {x}
                        </div>
                    )}


                </div>

               
            </div>
        </div>
    )
}
