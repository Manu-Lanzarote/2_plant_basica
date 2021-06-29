import React from 'react'
import CardItem from './CardItem'

import Imagen1 from '../../../../images/lake-192990_1280.jpg'
import Imagen2 from '../../../../images/interior3.jpg'
import Imagen3 from '../../../../images/house-1867187_1280.jpg'

//Importo mi archico CSS
import './Cards.css';

const Cards = () => {
    return (
       <div className="cards">
           <h1>Check our beautiful houses</h1>
           <div className="cards__container">
               <div className="cards__wrapper">
               <ul className='cards__items'>
                       <CardItem
                       //Pasamos por props los contenidos a CardItem.jsx
                        src={Imagen1}
                        text='Explora nuestras maravillosas propiedades y pilla una'
                        label='Water Adventure'
                        path='/homes'
                       />
                       <CardItem
                       //Pasamos por props los contenidos a CardItem.jsx
                        src={Imagen3}
                        text='Visita nuestro extenso catálogo alderededor del mundo'
                        label='Luxury'
                        path='/about'
                       />
                   </ul>
                   <ul className='cards__items'>
                       <CardItem
                       //Pasamos por props los contenidos a CardItem.jsx
                        src={Imagen1}
                        text='Explora nuestras maravillosas propiedades y pilla una'
                        label='Adrenaline'
                        path='/rentals'
                       />
                       <CardItem
                       //Pasamos por props los contenidos a CardItem.jsx
                        src={Imagen2}
                        text='Disfruta de tus vacaciones soñadas'
                        label='Adventure'
                        path='/homes'
                       />
                       <CardItem
                       //Pasamos por props los contenidos a CardItem.jsx
                        src={Imagen3}
                        text='Visita nuestro extenso catálogo alderededor del mundo'
                        label='Offer'
                        path='/contact'
                       />
                   </ul>
               </div>
           </div>
       </div>
    )
}

export default Cards
