import styled from 'styled-components'

const Container = styled.div`
background-color: magenta;
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
