import { FaTimes } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import styled from 'styled-components'

export const DropdownContainer = styled.div`
position: fixed;
z-index: 999;
width: 69%;
height: 100%;
background:#635c93f9;
display: grid;
align-items: center;
top: 0;
left: 0;
transition: 0.3s ease-in-out;
opacity: ${({isOpen}) => (isOpen ? '1' : '0')};
top: ${({isOpen}) => (isOpen ? '0' : '-100%')};
box-shadow: 10px 0 800px black;
`
export const Icon = styled.div`
position: absolute;
top: 1.2rem;
right: 1.5rem;
background: transparent;
border-radius: 50%;
padding: 5px 5px 0 5px;
font-size: 1.7rem;
cursor: pointer;
outline: none;
&:hover{
        background-color: #9f99ca;
    }
`

export const CloseIcon = styled(FaTimes)`
color: white;
`
export const DropdownWrapper = styled.div`
h1{
    color: white;
    font-size: 1.5rem;
    text-align: center;
    padding-bottom: 2rem;
}
`

export const DropdownMenu = styled.div`
display:grid;
grid-template-columns: 1fr;
grid-template-rows: repeat(4, 80px);
text-align: center;
margin-bottom: 4rem;

@media screen and(max-width: 480px){
    grid-template-rows: repeat(4, 60px);
}
`

export const DropdownLink = styled(Link)`
display: flex;
align-items: center;
justify-content: center;
color: white;
font-size: 1.5rem;
text-decoration: none;
transition: 0.2s ease-in-out;
padding: 1rem;
`