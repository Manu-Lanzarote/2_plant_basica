import styled, {css} from 'styled-components/macro'
//Importo useLocation para dar funcionalidad al cambio de color de la barra de navegación
//Menú hamburguesa
import {FaBars} from 'react-icons/fa'

import {Link} from 'react-router-dom'

export const Nav = styled.nav`
    height: 70px;
    display: flex;
    justify-content: space-between;
    padding: 1rem 2rem;
    z-index: 100;
    position: fixed;
    width: 100vw;
`;

export const NavLink = css`
    color: #fff;
    display: flex;
    align-items: center;
    padding: 0 1rem 12px;
    height: 100%;
    cursor: pointer;
    text-decoration: none;

    &:hover{
        border-bottom: 4px solid #fff;
        transition: all 0.2s ease-out;
    }
`;

export const Logo = styled(Link)`
    ${NavLink}
    font-size: 1.3rem;
    font-weight: 700;

    &:hover{
        border-bottom: none;
    }
`;

export const MenuBars = styled(FaBars)`
    display: none;
    color: white;
    font-size: 1.7rem;
    cursor: pointer;

    @media screen and (max-width: 768px){
        display: block;
    }
`;

export const NavMenu = styled.i`
    display: flex;
    align-items: center;
    margin-right: 5rem;

    @media screen and (max-width: 768px){
        display: none;
    }
`;

export const NavMenuLinks = styled(Link)`
    ${NavLink}
    font-size: 1.2rem;
`;