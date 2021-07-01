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
                    <div className='fab-icon-holder whats'>
                    <a href="https://wa.me/34639056797" target='_blank' rel="noreferrer"><i><ImWhatsapp/></i></a>
                    </div>
                </li>
                <li>
                    <div className='fab-icon-holder'>
                    <a href="tel:+34639056797"><i><BiPhone/></i></a>
                    </div>
                </li>
                <li>
                    <div className='fab-icon-holder mail'>
                        <a href="/contact"><i><BiMailSend/></i></a>
                    </div>
                </li>
            </ul>
        </div>
    )
}

export default FloatActionButton;
