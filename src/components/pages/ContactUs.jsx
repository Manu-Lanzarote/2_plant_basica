import styled from 'styled-components'

const Container = styled.div`
//Color con una opacidad del 80% - (El 80 de las últimas dos cifras)
background-color: #e008e780;
height: 100vh;

h1{
    padding: 5rem 0;
}
`

const ContactUs = () => {
    return (
        <Container>
            <h1>PÁGINA CONTACT US</h1>
        </Container>
    )
}

export default ContactUs
