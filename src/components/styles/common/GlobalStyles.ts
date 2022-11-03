import {createGlobalStyle} from "styled-components";
import img from "./mainBG.jpg";

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    border: 0;
    outline: 0;
    list-style: none;
    text-decoration: none;
    box-sizing: border-box;
  }

  h1,h2,h3,h4,h5,h6,p {
    margin: 0;
    padding: 0;
    font-family: "Space Mono", Arial, serif;
    font-weight: 400;
  }

  body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
    font-size: 16px;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
  }

  html {
    scroll-behavior: smooth;
  }

  ::-webkit-scrollbar {
    display: none;
  }
`

// theme styles

export const theme = {
    colors: {
        headingTextColor: '#000',
        primaryTextColor: '#4d4d4d',
        secondaryTextColor: 'rgba(255, 255, 255, 0.7)',
        whiteTextColor: '#fff',

    },
    bg: {
        header: `linear-gradient(rgba(255,255,255,.7), rgba(255,255,255,.7)), url(${img})`,
        primaryBgColor: '#FF9000',
        whiteBgColor: '#fff',
    }
}