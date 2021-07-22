import { Background, ModalWrapper, ModalContent, CloseModalButton } from "./ModalCss";

// Cerrar el modal con un click desde el background o con la tecla escape del teclado o pulsando la tecla enter o la barra espaciadora
import { useRef, useEffect, useCallback } from "react";

import data from './textos_politicas/legalTexto.json'
import Legal from "./textos_politicas/Legal";

const ModalLegal = ({showModal, setShowModal}) => {
//Función para cerrar el modal con un click desde el background
const modalRef = useRef()
const closeModal = e => {
    if(modalRef.current === e.target){
        setShowModal(false)
    }
}
//Función para cerrar el modal o con la tecla escape del teclado o pulsando la tecla enter o la barra espaciadora
const keyPress = useCallback(e => {
    if(e.key === 'Escape' && showModal){
        setShowModal(false)
    }
}, [setShowModal, showModal])

useEffect(() =>{
    document.addEventListener('keydown', keyPress)
}, [keyPress])

    return (
    <>
        {showModal ?
        <>
        {/* Cierre del modal desde el backgrund */}
        <Background ref={modalRef} onClick={closeModal}>
            <ModalWrapper showModal={showModal}>
                <ModalContent>
                    <Legal titulo={data.titulo} contenido={data.contenido}/>
                </ModalContent>
                <CloseModalButton aria-label='Close modal' onClick={() => setShowModal(prev => !prev)} />
            </ModalWrapper>
        </Background>
        </>
        : null}
    </>
    )
}

export default ModalLegal;