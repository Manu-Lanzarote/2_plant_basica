import styled, {css} from 'styled-components/macro'
//Flecha de los botones
import {IoMdArrowForward} from 'react-icons/io'
//Flechas de los sliders
import {IoMdArrowRoundBack} from 'react-icons/io'
import {IoMdArrowRoundForward} from 'react-icons/io'

export const HeroSection = styled.section`
    background-color: black;
    height: 100vh;
    max-height: 1100px;
    position: relative;
    overflow: hidden;
`;

export const HeroWrapper =styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    position: relative;
`;

export const HeroSlide = styled.div`
    z-index: 1;
    width: 100%;
    height: 100%;
`;

export const HeroSlider = styled.div`
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

export const HeroImage = styled.img`
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    object-fit: cover;
`;

export const HeroContent = styled.div`
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

export const Arrow = styled(IoMdArrowForward)`
    margin-left: 0.5rem;
`

export const SliderButtons = styled.div`
    position: absolute;
    bottom: 90px;
    right: 100px;
    display: flex;
    z-index: 10;
`;

//Estilos similares para los dos botones que incluiré más abajo usando el nombre de esta variable
export const arrowButtons = css`
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
export const PrevArrow = styled(IoMdArrowRoundBack)`
    ${arrowButtons}
`;
export const NextArrow = styled(IoMdArrowRoundForward)`
    ${arrowButtons}
`;