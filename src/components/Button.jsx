import styled, {css} from 'styled-components'
import {Link} from 'react-router-dom'

export const Button = styled(Link)`
    background-color: ${({primary}) => (primary ? '#635C93' : 'CD853F')};
    white-space: nowrap;
    outline: none;
    border: none;
    border-radius: 5px;
    min-width: 500px;
    max-width: 200px;
    cursor: pointer;
    text-decoration: none;
    transition: 0.3s;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 14px 20px;
    color: white;
    &:hover{
    background-color: #9f99ca;
    }
    ${props => props.colorDrop && css`
    font-size: 1.5rem;
    background-color: #413b72;
    color: white;
    padding: 14px 20px;
    `}
`;
