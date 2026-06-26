import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`

  *, *::before, *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, body, #root {
    min-height: 100vh;
    color: beige;
  }

  body {
    background-color: rgba(34, 34, 39, 0.93);
  }

`
export default GlobalStyles