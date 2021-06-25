import { HeroSection, HeroWrapper, HeroSlide, HeroSlider, HeroImage, HeroContent, Arrow, SliderButtons, PrevArrow, NextArrow  } from './HeroCss';

import {useState, useRef, useEffect} from 'react'

import { Button } from '../../../styled_components/Button';

//Propiedades data-aos ... ANIMACIONES

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
