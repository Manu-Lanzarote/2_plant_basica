import 'styled-components/macro'

import { Section, Container, Heading, InfoRow, InfoWrap, Image, InfoLink, Arrow } from './ListingsCss'

import Home1 from '../../../../images/homeOne.jpg'
import Home2 from '../../../../images/homeTwo.jpg'


const Listings = () => {
    return (
        <Section>
            <Container>
                <Heading>
                    <h2
                    data-aos='fade-right'
                    data-aos-duration='1000'
                    data-aos-once='true'
                    >
                        View our newest Homes
                    </h2>
                </Heading>
                <InfoRow>
                    <InfoWrap
                    data-aos='zoom-out-up'
                    data-aos-duration='1200'
                    data-aos-once='true'
                    >
                        <Image src={Home1} alt='home'/>
                        <p>4 habitaciones y 3 baños en Playa Blanca, Lanzarote</p>
                        <InfoLink to='home'>
                            <span>View details</span>
                            <Arrow/>
                        </InfoLink>
                    </InfoWrap>
                    <InfoWrap
                    data-aos='zoom-out-down'
                    data-aos-duration='1200'
                    data-aos-once='true'
                    >
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
