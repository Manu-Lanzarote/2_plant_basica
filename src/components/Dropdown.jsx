import { FaTimes } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import styled from 'styled-components'
import { menuData } from '../data/menuData';
import { Button } from './Button';

const DropdownContainer = styled.div`
position: fixed;
z-index: 999;
width: 100%;
height: 100%;
background:#635C93;
display: grid;
align-items: center;
top: 0;
left: 0;
transition: 0.3s ease-in-out;
opacity: 1;
top: 0;
`
const Icon = styled.div`
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

const CloseIcon = styled(FaTimes)`
color: white;
`
const DropdownWrapper = styled.div``

const DropdownMenu = styled.div`
display:grid;
grid-template-columns: 1fr;
grid-template-rows: repeat(4, 80px);
text-align: center;
margin-bottom: 4rem;

@media screen and(max-width: 480px){
    grid-template-rows: repeat(4, 60px);
}
`

const DropdownLink = styled(Link)`
display: flex;
align-items: center;
justify-content: center;
color: white;
font-size: 1.5rem;
text-decoration: none;
transition: 0.2s ease-in-out;
`
const BtnWrap = styled.div`
display: flex;
justify-content: center;
`

const Dropdown = () => {
    return (
            <DropdownContainer>
                <Icon>
                    <CloseIcon/>
                </Icon>    
                    <DropdownWrapper>
                        <DropdownMenu>
                            {menuData.map((item, index) => (
                                <DropdownLink to={item.link} key={index}>
                                    {item.title}
                                </DropdownLink>
                            ))}
                        </DropdownMenu>
                        <BtnWrap>
                            <Button colorDrop to='/contact'>
                                Contact Us
                            </Button>
                        </BtnWrap>
                    </DropdownWrapper>
            </DropdownContainer>
    )
}

export default Dropdown;