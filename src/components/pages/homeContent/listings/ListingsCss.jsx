import styled from 'styled-components/macro'
import { IoMdArrowRoundForward } from 'react-icons/io'
import {Link} from 'react-router-dom'

export const Section = styled.section`
width: 100%;
height: 100%;
/* padding: 10rem calc((100vw -1300px) / 2); */
`
export const Container = styled.div`
width: 100%;
height: 100%;
padding: 2rem 1rem 3rem;
`
export const Heading = styled.h2`
font-size: 1.34rem;
padding: 1rem;
margin-bottom: 40px;
`
export const InfoRow = styled.div`
display: flex;
flex-direction: row;
padding: 1rem 0;

@media screen and (max-width: 768px) {
    flex-direction: column;
}
`
export const InfoWrap = styled.div`
padding: 0 1rem;
/* min-height: 550px; */
height: 100%;
@media screen and (max-width: 768px) {
        min-height: 450px;
    }
p{
    margin-bottom: 1rem;
    font-weight: 400;
    line-height: 1.5;
}
`
export const Image = styled.img`
width: 100%;
height: 100%;
object-fit: cover;
margin-bottom: 1rem;

#home2{
    margin-top: 120px;
}

@media screen and (max-width: 768px) {
        min-height: 300px;
    }
`
//Se importa desde react-router
export const InfoLink = styled(Link)`
display: flex;
align-items: center;
text-decoration: none;
color: #111;
transition: 0.3s;
margin-bottom: 2rem;
`
//Se importa desde los iconos
export const Arrow = styled(IoMdArrowRoundForward)`
margin-left: 10px;
`