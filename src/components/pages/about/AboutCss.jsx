import styled from 'styled-components'
import Imagen from '../../../images/house-1477041_1280.jpg'

export const Container = styled.div`
display: flex;
align-items: center;
justify-content: center;
font-size: 2.5rem;
color: white;
height: 70vh;
background-image: url(${Imagen});
background-repeat: no-repeat;
background-size: cover;
`