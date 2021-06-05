//Iconos redes sociales
import {IoLogoWhatsapp} from 'react-icons/io5'
import {ImPlus} from 'react-icons/im'
import {FiPhoneCall} from 'react-icons/fi'

import styled, {css} from 'styled-components'

const Container = styled.div`
position: fixed;
bottom: 20px;
right: 20px;
z-index: 20;

input {
    /* display: none; */
}
`
const icons = css`
display: block;
width: 3rem;
height: 3rem;
border-radius: 50px;
padding: 8px;
box-shadow: 1px 1px 5px black;
transition: all 500ms ease;
`
const Whatsapp = styled(IoLogoWhatsapp)`
${icons}
background-color: green;
color: white;
margin-bottom: -15px;
/* opacity: 0;
visibility: hidden; */
&:hover{
    background-color: white;
    color: green;
}
`
const Phone = styled(FiPhoneCall)`
${icons}
background-color: black;
color: white;
margin-bottom: -15px;
/* opacity: 0;
visibility: hidden; */
&:hover{
    background-color: white;
    color: black;
}
`
const Plus = styled(ImPlus)`
${icons}
background-color: red;
color: white;
cursor: pointer;
&:hover{
    background-color: white;
    color: red;
}
`

const FloatButton = () => {
    return (
        <Container>
                <input className="check" type="checkbox"  id='btn-mas'/>
            <div>
                <a href='https://google.com' rel='nooper noreferrer' target='_blank'>
                    <Whatsapp/>
                </a>
                <a href='https://google.com' rel='nooper noreferrer' target='_blank'>
                    <Phone/>
                </a>
                <div>
                    <label for='btn-mas'><Plus/></label>
                </div>
            </div>
        </Container>
    )
}

export default FloatButton
