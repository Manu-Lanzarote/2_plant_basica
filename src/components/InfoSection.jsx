import styled from 'styled-components/'
import { Button } from './styled_components/Button'

import { IoMdArrowRoundForward } from 'react-icons/io'

const Section = styled.section`
    width: 100%;
    height: 100%;
    padding: 6rem 0;
`

const Container = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;

    @media screen and (max-width: 768px) {
        grid-template-columns: 1fr;
    }
`

const ColumnLeft = styled.div`
    width: 50vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    line-height: 1.4;
    padding: 2rem;
    order: ${({reverse}) => (reverse ? '2' : '1')};

    h1{
        margin-bottom: 2rem;
        font-size: 2rem;
    }
    p{
        line-height: 1.5;
    }

    @media screen and (max-width: 768px) {
        width: 100vw;
    }
`
const ColumnRight = styled.div`
    padding: 1rem;
    order: ${({reverse}) => (reverse ? '1' : '2')};
    display: flex;
    justify-content: center;
    align-items: center;

    @media screen and (max-width: 768px) {
        order: ${({reverse}) => (reverse ? '2' : '1')};
    }

    img{
        max-width: 100%;
        height: 80vh;

        @media screen and (max-width: 900px) {
        height: 60vh;

        @media screen and (max-width: 468px) {
        height: 50vh;
        }
    }
    }
`
const ImgCont = styled.div`
    width: 100%;
`;
//Se importa desde los iconos
const Arrow = styled(IoMdArrowRoundForward)`
margin-left: 10px;
`

const InfoSection = ({heading, paragraphOne, paragraphTwo, buttonLabel, reverse, image}) => {
    return (
        <Section>
            <Container>
                <ColumnLeft>
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
                        <img src={image} alt='Home' css='' />
                    </ImgCont>
                </ColumnRight>
            </Container>
        </Section>
    )
}

export default InfoSection
