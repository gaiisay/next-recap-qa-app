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

  main {
    padding: 2rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    line-height: 1.5;
    color: #F7F7F7;
  }

  section {
    margin-bottom: 1rem;
  }


`

export default GlobalStyles
