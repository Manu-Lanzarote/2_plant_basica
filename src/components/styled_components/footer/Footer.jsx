import { Section, Container, FooterTop, Quote, FooterInfo, FooterBottom, SocialIcons, Youtube, Facebook, Instagram } from './FooterCss'

import {Link} from 'react-router-dom'

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
                </FooterBottom>
            </Container>
        </Section>
    )
}

export default Footer;
