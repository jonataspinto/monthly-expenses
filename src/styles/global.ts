import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%;
  }

  html, body, #__next {
    height: 100%;
  }

  body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif
  }

  input, select {
    padding: 0.5rem;
    outline: solid 1px #fcfcfc;
    outline-offset: 0rem;
    color: #fff;
    background-color: transparent;
    border: none;
    border-radius: 0.5rem;
    font-size: 1.75rem;
  }
`

export default GlobalStyles
