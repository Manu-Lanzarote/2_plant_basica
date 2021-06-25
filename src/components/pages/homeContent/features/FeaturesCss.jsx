import styled from 'styled-components'
//Flecha del botón
import {IoMdArrowForward} from 'react-icons/io'


export const Section = styled.section`
background-color: #635C93;
padding: 12rem 0;
display: flex;
flex-direction: column;
justify-content: center;
`
export const Container = styled.div`
background-color: white;
padding: 3rem 2rem;
position: relative;
`
export const Wrap = styled.div`
max-width: 1200px;
margin: 0 auto;
`
export const ColumnLeft = styled.div`
display: flex;
flex-wrap: wrap;
margin: 0 -15px;
justify-content: flex-start;
padding: 1rem;
`
export const Content = styled.div`
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
export const Arrow = styled(IoMdArrowForward)`
    margin-left: 0.5rem;
`
export const ColumnRight = styled.div`
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
export const Image = styled.img`
width: 100%;
height: 100%;
object-fit: cover;
`