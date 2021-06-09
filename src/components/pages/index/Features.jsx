import styled from 'styled-components'
import { Button } from '../../styled_components/Button'

import Interior from '../../../images/interior2.jpg'

//Flecha del botón
import {IoMdArrowForward} from 'react-icons/io'

const Section = styled.section`
background-color: #635C93;
padding: 12rem 0;
display: flex;
flex-direction: column;
justify-content: center;
`
const Container = styled.div`
background-color: white;
padding: 3rem 2rem;
position: relative;
`
const Wrap = styled.div`
max-width: 1200px;
margin: 0 auto;
`
const ColumnLeft = styled.div`
display: flex;
flex-wrap: wrap;
margin: 0 -15px;
justify-content: flex-start;
padding: 1rem;
`
const Content = styled.div`
flex: 0 0 50%;
@media screen and (max-width: 768px){
    flex: 0 0 100%;
    max-width: 100%;
    margin-top: 250px;
}
h2{
    margin-bottom: 2rem;
    font-size: 2rem;
}
p{
    margin-bottom: 1rem;
    line-height: 1.5;
}
`
const Arrow = styled(IoMdArrowForward)`
    margin-left: 0.5rem;
`
const ColumnRight = styled.div`
position: absolute;
top: -80px;
right: 0;
max-width: 850px;
height: 140%;
width: 45%;
padding-left: 1rem;
@media screen and (max-width: 768px){
    height: 320px;
    top: -65px;
    width: 80%;
    margin: 0 auto;
    left: 0;
}
`
const Image = styled.img`
width: 100%;
height: 100%;
object-fit: cover;
`

const Features = () => {
    return (
        <Section>
            <Container>
                <Wrap>
                    <ColumnLeft>
                        <Content
                        data-aos='fade-right'
                        data-aos-duration='1200'
                        data-aos-delay='300'
                        data-aos-once='true'
                        >
                            <h2>Stunning Interior</h2>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Exercitationem obcaecati saepe ut. Recusandae, odio.</p>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, explicabo.</p>
                                <Button to='/homes' info>
                                    Learn More <Arrow/>
                                </Button>
                            </Content>
                        </ColumnLeft>
                    <ColumnRight>
                        <Image src={Interior} alt='interior'
                        data-aos='fade-left'
                        data-aos-duration='1200'
                        data-aos-once='true'
                        />
                    </ColumnRight>
                </Wrap>
            </Container>
        </Section>
    )
}

export default Features
