import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    *{
        margin: 0;
        padding:0;
        box-sizing: border-box;
        font-family: "Jaro", sans-serif;
    }
    html {
        font-size: 62.5%;
    }
    :root{
        --color-borders: #b197fc;
        --color-background:#f3f0ff;
        --color-elements:#6741d9
    }
`;

export default GlobalStyles;
