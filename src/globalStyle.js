import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Monserrat', sans-serif;
    }
    html, body{
        background-color: white;
        overflow-x:hidden;
    }
`;

export default GlobalStyle;
