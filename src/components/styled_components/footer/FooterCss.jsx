import styled, {css} from 'styled-components/macro'
//Iconos redes sociales
import {IoLogoYoutube, IoLogoFacebook, IoLogoInstagram} from 'react-icons/io5'

export const Section = styled.section`
background-color: #635C93;
color: #fff;
width: 100%;
min-height: 500px;
padding: 0 2rem;
`
export const Container = styled.div`
width: 100%;
height: 100%;
padding: 1rem 2rem;
`
export const FooterTop = styled.div`
display: flex;
flex-direction: row;
padding: 3rem 0;
@media screen and (max-width: 768px){
    /* flex-direction: column; */
}
`
export const Quote = styled.div`
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
export const FooterInfo = styled.div`
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
export const FooterBottom = styled.div`
display: flex;
@media screen and (max-width: 768px){
    flex-direction: column;
}
`
export const SocialIcons = styled.div`
display: flex;
width: 50%;
@media screen and (max-width: 768px){
    margin-bottom: 2rem;
    width: 50%;
}
`
export const icons = css`
font-size: 2rem;
margin-right: 1.5rem;
color: white;
`
export const Youtube = styled(IoLogoYoutube)`
${icons}
`
export const Facebook = styled(IoLogoFacebook)`
${icons}
`
export const Instagram = styled(IoLogoInstagram)`
${icons}
`
export const Contact = styled.div`
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