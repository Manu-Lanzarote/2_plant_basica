import { Section, Container, ColumnLeft, Arrow, ColumnRight, ImgCont } from './InfoSectionCss'

import { Button } from '../../../styled_components/Button'


//Los props vienen de infoData.js ({heading, paragraphOne, paragraphTwo, buttonLabel, reverse, image, delay})
const InfoSection = ({heading, paragraphOne, paragraphTwo, buttonLabel, reverse, image, delay}) => {
    return (
        <Section>
            <Container>
                <ColumnLeft
                //reverse 
                reverse={reverse}
                data-aos='fade-up'
                data-aos-duration='1000'
                data-aos-once='true'
                data-aos-delay={delay}
                >
                    <h1>{heading}</h1>
                    <p>{paragraphOne}</p>
                    <p>{paragraphTwo}</p>
                    <Button to='/homes' info>
                        {buttonLabel}
                    <Arrow/>
                    </Button>
                </ColumnLeft>
                <ColumnRight reverse={reverse}>
                    <ImgCont>
                        <img src={image} alt='Home' css=''
                        data-aos='zoom-out'
                        data-aos-duration='1000'
                        data-aos-once='true'
                        data-aos-delay={delay}
                        />
                    </ImgCont>
                </ColumnRight>
            </Container>
        </Section>
    )
}

export default InfoSection
