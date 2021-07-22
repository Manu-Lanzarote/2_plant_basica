import styled from "styled-components";
import {MdClose} from 'react-icons/md'

export const Background = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 999;
    width: 100%;
    min-height: 100vh;
    background-color: rgba(0, 0, 0, 0.9);
`

export const ModalWrapper = styled.div`
    width: 80%;
    height: 90vh;
    box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);
    background-color: #635C93;
    color: black;
    position: relative;
    z-index: 99;
    border-radius: 5px;
`

export const ModalContent = styled.div`
    padding: 2rem;
    display: flex;
    flex-direction: column;
    justify-content: left;
    align-items: center;
    color: white;

    /* Contenido con Scroll */
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: auto;

    p{
        margin-bottom: 1rem;
        text-align: left;
    }
    h1{
        font-size: 1rem;
    }
`

export const CloseModalButton = styled(MdClose)`
    cursor: pointer;
    position: absolute;
    top: 10px;
    right: 20px;
    width: 32px;
    height: 32px;
    padding: 0;
    z-index: 99;
    color: #635C93;
    background-color: white;
    border-radius: 50px;
`