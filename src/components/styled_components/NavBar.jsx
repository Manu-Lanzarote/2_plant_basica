import styled, {css} from 'styled-components/macro'
//Importo useLocation para dar funcionalidad al cambio de color de la barra de navegación
import {Link, useLocation} from 'react-router-dom'
//Funcionalidad cambiar el color de la barra de navegación al hacer scroll
import {useState, useEffect} from 'react'

import {menuData} from '../../data/menuData'

//Menú hamburguesa
import {FaBars} from 'react-icons/fa'



const Nav = styled.nav`
    height: 60px;
    display: flex;
    justify-content: space-between;
    padding: 1rem 2rem;
    z-index: 100;
    position: fixed;
    width: 100vw;
`;

const NavLink = css`
    color: #fff;
    display: flex;
    align-items: center;
    padding: 0 1rem;
    height: 100%;
    cursor: pointer;
    text-decoration: none;;
`;

const Logo = styled(Link)`
    ${NavLink}
    font-size: 1.3rem;
    font-weight: 700;
`;

const MenuBars = styled(FaBars)`
    display: none;
    color: white;
    font-size: 1.7rem;
    cursor: pointer;

    @media screen and (max-width: 768px){
        display: block;
    }
`;

const NavMenu = styled.i`
    display: flex;
    align-items: center;
    margin-right: 5rem;

    @media screen and (max-width: 768px){
        display: none;
    }
`;

const NavMenuLinks = styled(Link)`
    ${NavLink}
    font-size: 1.2rem;
`;

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
