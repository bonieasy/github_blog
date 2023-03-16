import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
body {
    background-color: ${props => props.theme.background};
    color: ${props => props.theme.text};
    -webkit-font-smoothing: antialiased;
}
body, input, textarea, button {
    font: 400 1rem Nunito, sans-serif;
}

a:link {
  text-decoration: none;
}

a:visited {
  text-decoration: none;
}
`;