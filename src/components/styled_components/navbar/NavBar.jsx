import { Nav, Logo, MenuBars, NavMenu, NavMenuLinks } from './NavBarCss'

import {useLocation} from 'react-router-dom'
//Funcionalidad cambiar el color de la barra de navegación al hacer scroll
import {useState, useEffect} from 'react'

import {menuData} from '../../../data/menuData'


const Navbar = ({toggle}) => {
    //Funciones para cambiar el color de la barra de navegación al hacer scroll
    const [navbar, setNavbar] = useState(false)
    const location = useLocation()

    const changeBackground = () => {
        if(window.pageYOffset >=200){
            setNavbar(true)
        }else{
            setNavbar(false)
        }
    }

    useEffect(() => {
        const watchScroll = () => {
            window.addEventListener('scroll', changeBackground)
        }
        watchScroll()
        return ()=>{
            window.removeEventListener('scroll', changeBackground)
        }
    }, [])

    //Lógica para chequear si el NavaBar se encuentra en la página Home. Si está quiero que sea transparente, si no quiero que coja un color de fondo.
    //Con location.pathname chequeo donde se encuentra.
    let style = {
        backgroundColor: navbar || location.pathname !== '/' ? '#635C93' : 'transparent',
        transition: '0.4s'
    }

    return (
        //En la etiqueta Nav meto la variable style de la función anterior
        <Nav style={style}>
            <Logo to='/'>
                NEW COLONY CLUB
            </Logo>
            <MenuBars onClick={toggle}/>
            <NavMenu>
                {menuData.map((item, index) =>(
                    <NavMenuLinks to={item.link} key={index}>
                        {item.title}
                    </NavMenuLinks>
                ))}
            </NavMenu>
        </Nav>
    )
}

export default Navbar;
