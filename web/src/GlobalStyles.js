import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        font-family: 'Roboto Slab', serif;
    }
    body{
        background-color: #efefef;
    }
    ul, li{
        list-style: none;
    }
    
`

export default GlobalStyles;