import styled from 'styled-components/macro'

import {Link} from 'react-router-dom'
import { IoMdArrowRoundForward } from 'react-icons/io'

import Home1 from '../images/homeOne.jpg'
import Home2 from '../images/homeTwo.jpg'



const Section = styled.section`
width: 100%;
height: 100%;
/* padding: 10rem calc((100vw -1300px) / 2); */
`
const Container = styled.div`
width: 100%;
height: 100%;
padding: 2rem 1rem 0;
`
const Heading = styled.h2`
font-size: 1.34rem;
padding: 1rem;
margin-bottom: 40px;
`
const InfoRow = styled.div`
display: flex;
flex-direction: row;
padding: 1rem 0;

@media screen and (max-width: 768px) {
    flex-direction: column;
}
`
const InfoWrap = styled.div`
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
const Image = styled.img`
width: 100%;
height: 100%;
object-fit: cover;
margin-bottom: 1rem;
@media screen and (max-width: 768px) {
        min-height: 300px;
    }
`
//Se importa desde ract-router
const InfoLink = styled(Link)`
display: flex;
align-items: center;
text-decoration: none;
color: #111;
transition: 0.3s;
margin-bottom: 2rem;
`
//Se importa desde los iconos
const Arrow = styled(IoMdArrowRoundForward)`
margin-left: 10px;
`


const Listings = () => {
    return (
        <Section>
            <Container>
                <Heading>
                    <h2>
                        View our newest Homes
                    </h2>
                </Heading>
                <InfoRow>
                    <InfoWrap>
                        <Image src={Home1} alt='home'/>
                        <p>4 habitaciones y 3 baños en Playa Blanca, Lanzarote</p>
                        <InfoLink to='home'>
                            <span>View details</span>
                            <Arrow/>
                        </InfoLink>
                    </InfoWrap>
                    <InfoWrap>
                        <Image src={Home2} alt='home' css={`
                        margin-top: 120px;
                            @media screen and (max-width: 768px){
                                margin-top: 0;
                            }
                        `}/>
                        <p>3 habitaciones y 2 baños en Puerto del Carmen, Lanzarote</p>
                        <InfoLink to='home'>
                            <span>View details</span>
                            <Arrow/>
                        </InfoLink>
                    </InfoWrap>
                </InfoRow>
            </Container>
        </Section>
    )
}

export default Listings
