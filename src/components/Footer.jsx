import styled, {css} from 'styled-components/macro'
import { Button } from './styled_components/Button'
//Flecha botón de contacto
import {IoMdArrowForward} from 'react-icons/io'
import {Link} from 'react-router-dom'
//Iconos redes sociales
import {IoLogoYoutube, IoLogoFacebook, IoLogoInstagram} from 'react-icons/io5'


const Section = styled.section`
background-color: #635C93;
color: #fff;
width: 100%;
min-height: 500px;
padding: 0 2rem;
`
const Container = styled.div`
width: 100%;
height: 100%;
padding: 1rem 2rem;
`
const FooterTop = styled.div`
display: flex;
flex-direction: row;
padding: 3rem 0;
@media screen and (max-width: 768px){
    /* flex-direction: column; */
}
`
const Quote = styled.div`
flex: 1;
padding: 2rem 0;
h3{
    font-size: 4rem;
}
@media screen and (max-width: 768px){
    h3 {font-size: 2rem;}
    padding: 1rem 1rem 1rem 0;
}
`
const FooterInfo = styled.div`
padding: 2rem;
line-height: 3;
display: flex;
flex-direction: column;
a{
    color: white;
    text-decoration: none;
}
@media screen and (max-width: 768px){
    padding: 1rem;
}
`
const FooterBottom = styled.div`
display: flex;
@media screen and (max-width: 768px){
    flex-direction: column;
}
`
const SocialIcons = styled.div`
display: flex;
width: 50%;
@media screen and (max-width: 768px){
    margin-bottom: 2rem;
    width: 50%;
}
`
const icons = css`
font-size: 2rem;
margin-right: 1.5rem;
color: white;
`
const Youtube = styled(IoLogoYoutube)`
${icons}
`
const Facebook = styled(IoLogoFacebook)`
${icons}
`
const Instagram = styled(IoLogoInstagram)`
${icons}
`
const Contact = styled.div`
width: 50%;
display: flex;
justify-content: flex-end;
align-items: center;
@media screen and (max-width: 768px){
    width: 100%;
    justify-content: flex-start;
    padding-bottom: 7rem;
}
`


const Footer = () => {
    return (
        <Section>
            <Container>
                <FooterTop>
                    <Quote>
                        <h3>
                            Let´s find <br/> your Dream Home
                        </h3>
                    </Quote>
                    <FooterInfo>
                        <h3>Contact us</h3>
                        <Link to='/home'>FAQ</Link>
                        <Link to='/home'>Support</Link>
                        <Link to='/home'>Question</Link>
                    </FooterInfo>
                    <FooterInfo>
                        <h3>Offices</h3>
                        <Link to='/home'>Las Palmas</Link>
                        <Link to='/home'>Tenerife</Link>
                        <Link to='/home'>Lanzarote</Link>
                    </FooterInfo>
                </FooterTop>
                <FooterBottom>
                    <SocialIcons>
                        <a href='https://google.com' rel='nooper noreferrer' target='_blank'>
                            <Youtube/>
                        </a>
                        <a href='https://google.com' rel='nooper noreferrer' target='_blank'>
                            <Facebook/>
                        </a>
                        <a href='https://google.com' rel='nooper noreferrer' target='_blank'>
                            <Instagram/>
                        </a>
                    </SocialIcons>
                    <Contact>
                        <Button to='/home' footer>
                            Let´s Chat <IoMdArrowForward/>
                        </Button>
                    </Contact>
                </FooterBottom>
            </Container>
        </Section>
    )
}

export default Footer;
