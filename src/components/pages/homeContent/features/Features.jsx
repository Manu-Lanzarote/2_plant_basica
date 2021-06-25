import { Section, Container, Content, Wrap, ColumnLeft, Arrow, ColumnRight, Image } from './FeaturesCss'

import { Button } from '../../../styled_components/Button'

import Interior from '../../../../images/interior2.jpg'

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
