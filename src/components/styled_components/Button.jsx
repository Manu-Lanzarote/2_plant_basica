import styled, {css} from 'styled-components'
import {Link} from 'react-router-dom'

export const Button = styled(Link)`
    background-color: ${({primary}) => (primary ? '#635C93' : 'CD853F')};
    white-space: nowrap;
    outline: none;
    border: none;
    border-radius: 5px;
    width: 180px;
    cursor: pointer;
    text-decoration: none;
    transition: 0.3s;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 14px 20px;
    color: white;
    background-color: #635C93;
    box-shadow: 1px 1px 5px black;
    &:hover{
    background-color: #9f99ca;
    }
    ${props => props.colorDrop && css`
    font-size: 1.5rem;
    padding: 14px 20px;
    background-color: #5d52a5;
    `}
    ${props => props.info && css`
    margin-top: 2rem;
    `}
    ${props => props.nada && css`
    font-size: 1.2rem;
    font-style: italic;
    background-color: transparent;
    box-shadow: none;
    `}
    ${props => props.footer && css`
    background-color: white;
    color: #635C93;
    `}
`;
