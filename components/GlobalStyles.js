import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
* {
    margin: 0;
    padding: 0;
  }

  html {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    height: 100vh;
    background-color: #393E46;
  }

  body {
    color: #F7F7F7;
  }

  main {
    padding: 2rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    line-height: 1.5;
  }

  section {
    margin-bottom: 1rem;
  }

  a {
    color: #F7F7F7;
    text-decoration: none;
  }


`

export default GlobalStyles
