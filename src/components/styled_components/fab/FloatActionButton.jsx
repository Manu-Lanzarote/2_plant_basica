import React from 'react'
import  './FloatCss.css'
import {BiPlus, BiPhone, BiMailSend} from 'react-icons/bi'
import {ImWhatsapp} from 'react-icons/im'



const FloatActionButton = () => {
    return (
        <div className='fab-container'>
            <div className='fab fab-icon-holder'>
                <i><BiPlus/></i>
            </div>
           
            <ul className="fab-options">
                <li>
                    <div className='fab-icon-holder'>
                        <i><BiPhone/></i>
                    </div>
                </li>
                <li>
                    <div className='fab-icon-holder whats'>
                        <i><ImWhatsapp/></i>
                    </div>
                </li>
                <li>
                    <div className='fab-icon-holder mail'>
                        <i><BiMailSend/></i>
                    </div>
                </li>
            </ul>
        </div>
    )
}

export default FloatActionButton;
