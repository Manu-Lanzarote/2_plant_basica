import styled from 'styled-components'
import {BsHeartFill} from 'react-icons/bs'

export const Main = styled.p`
    text-align: center;
    background-color: #635C93;
    color: white;
    font-size: 0.8rem;
    padding: 10px 50px 100px;

    a{
        color: white;
    }
`

export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #635C93;
    color: #fff;
`

export const Button = styled.button`
    background-color: #635C93;
    color: white;
    font-size: 0.8rem;
    border: none;
    cursor: pointer;
    padding: 5px 10px;
`

export const Hearth = styled(BsHeartFill)`
    color: red;
`;