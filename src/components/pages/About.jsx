import styled from 'styled-components'

const Container = styled.div`
background-color: pink;
height: 100vh;

h1{
    padding: 5rem 0;
}
`

const About = () => {
    return (
        <Container>
            <h1>PÁGINA ABOUT</h1>
        </Container>
    )
}

export default About;
