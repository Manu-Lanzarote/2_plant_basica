import styled, {css} from 'styled-components/macro'
import {Link} from 'react-router-dom'

import {menuData} from '../data/menuData'
import { Button } from './Button';

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
    margin-right: -48px;

    @media screen and (max-width: 768px){
        display: none;
    }
`;

const NavMenuLinks = styled(Link)`
    ${NavLink}
`;

const NavBtn = styled.div`
    display: flex;
    align-items: center;
    margin-right: 24px;

    @media screen and (max-width: 768px){
        display: none;
    }
`;

const NavBar = () => {
    return (
        <Nav>
            <Logo to='/'>
                NEW COLONY CLUB
            </Logo>
            <MenuBars/>
            <NavMenu>
                {menuData.map((item, index) =>(
                    <NavMenuLinks to={item.link} key={index}>
                        {item.title}
                    </NavMenuLinks>
                ))}
            </NavMenu>
            <NavBtn>
                <Button to='/contact' primary='true'>
                    Contact Us
                </Button>
            </NavBtn>
        </Nav>
    )
}

export default NavBar;
