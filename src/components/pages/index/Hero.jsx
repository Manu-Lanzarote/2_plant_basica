import {useState, useRef, useEffect} from 'react'

import styled, {css} from 'styled-components/macro'
import { Button } from '../../styled_components/Button';

//Flecha de los botones
import {IoMdArrowForward} from 'react-icons/io'

//Flechas de los sliders
import {IoMdArrowRoundBack} from 'react-icons/io'
import {IoMdArrowRoundForward} from 'react-icons/io'

//Propiedades data-aos ... ANIMACIONES

const HeroSection = styled.section`
    background-color: black;
    height: 100vh;
    max-height: 1100px;
    position: relative;
    overflow: hidden;
`;

const HeroWrapper =styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    position: relative;
`;

const HeroSlide = styled.div`
    z-index: 1;
    width: 100%;
    height: 100%;
`;

const HeroSlider = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    &::before {
        content: '';
        position: absolute;
        z-index: 2;
        width: 100%;
        height: 100vh;
        bottom: 0;
        left: 0;
        overflow: hidden;
        opacity: 0.4;
        background: linear-gradient(
            0deg,
            rgba(0,0,0,0.2) 0%,
            rgba(0,0,0,0.2) 50%,
            rgba(0,0,0,0.6) 100%,
        );
    }
`;

const HeroImage = styled.img`
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    object-fit: cover;
`;

const HeroContent = styled.div`
    position: relative;
    z-index: 10;
    display: flex;
    flex-direction: column;
    max-width: 1600px;
    width: calc(100% - 100px);
    color: white;
    padding-left: 10%;

    h1{
        font-size: clamp(1rem, 8vw, 2rem);
        font-weight: 400;
        text-transform: uppercase;
        text-shadow: 2px 2px 5px black;
        text-align: left;
        margin-bottom: 1rem;
    }

    p{
        text-shadow: 2px 2px 5px black;
    }
`;

const Arrow = styled(IoMdArrowForward)`
    margin-left: 0.5rem;
`

const SliderButtons = styled.div`
    position: absolute;
    bottom: 60px;
    right: 80px;
    display: flex;
    z-index: 10;
`;

//Estilos similares para los dos botones que incluiré más abajo usando el nombre de esta variable
const arrowButtons = css`
    width: 45px;
    height: 45px;
    color: white;
    cursor: pointer;
    background-color: #635C93;
    border-radius: 50px;
    padding: 8px;
    margin-right: 1rem;
    user-select: none;
    transition: 0.3.s;
    box-shadow: 1px 1px 5px black;
    &:hover{
        background-color: #9f99ca;
        transform: scale(1.05);
    }
`;

//Botones
const PrevArrow = styled(IoMdArrowRoundBack)`
    ${arrowButtons}
`;
const NextArrow = styled(IoMdArrowRoundForward)`
    ${arrowButtons}
`;

const Hero = ({slides}) => {

    //Lógica - Añadir funcionalidad a los botones para que avance o retroceda el slider
    const [current, setCurrent] = useState(0);
    const length = slides.length;
    const timeout = useRef(null)

    //UseEffect - Paso automático de los sliders
    useEffect(() => {
        const nextSlide = () => {
            setCurrent(current => (current === length -1 ? 0 : current + 1))
        }
        timeout.current = setTimeout(nextSlide, 3000)

        return function (){
            if(timeout.current) {
                clearTimeout(timeout.current)
            }
        }
    }, [current, length])

    const nextSlide = () => {
        if(timeout.current) {
            clearTimeout(timeout.current)
        }
        setCurrent(current === length - 1 ? 0 : current + 1);
        // console.log(current);
    }

    const prevSlide = () => {
        if(timeout.current) {
            clearTimeout(timeout.current)
        }
        setCurrent(current === 0 ? length - 1 : current - 1);
        // console.log(current);
    }

    if(!Array.isArray(slides) || slides.length <= 0) {
        return null;
    }

    return (
        <HeroSection>
            <HeroWrapper>
                {slides.map((slide, index) =>{
                    return(
                        <HeroSlide key={index}>
                            {index === current && (
                                <HeroSlider>
                                <HeroImage data-aos="fade"
                                data-aos-duration='2000' src={slide.image} alt={slide.alt}/>
                                    <HeroContent>
                                        <h1 data-aos='fade-down'
                                        data-aos-duration='1200'>{slide.title}</h1>
                                        <p data-aos='fade-down'
                                        data-aos-duration='1000' data-aos-delay='200'>{slide.price}</p>
                                        <Button data-aos="fade-down-right" data-aos-duration='1200' size to={slide.path} primary='true' info>
                                            {slide.label}
                                            <Arrow/>
                                        </Button>
                                    </HeroContent>
                            </HeroSlider>
                            )}
                        </HeroSlide>
                    )
                })}
                <SliderButtons>
                    <PrevArrow onClick={prevSlide}/>
                    <NextArrow onClick={nextSlide}/>
                </SliderButtons>
            </HeroWrapper>
        </HeroSection>
    )
}

export default Hero
