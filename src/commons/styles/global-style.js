import { createGlobalStyle } from 'styled-components'

import CodivImg from '../../assets/images/covid.jpg'

const globalStyles = createGlobalStyle `

  * {
    outline: none;
    box-sizing: border-box;
  }

  body {
    line-height: normal;
  }

  html, body {
    width: 100%;
    min-height: 100%;
    display: flex;
    padding: 0;
    margin: 0;
  }

  a, button {
    outline: none;
    text-decoration: none;
    cursor: pointer;
  }

  #root {
    background: url(${CodivImg});
    height: 100%;
    width: 100%;
    background-size: cover;
    background-position: center center;
  }

  .mb-2 { margin-bottom: 16px; }
  .pt-2 { padding-top: 16px; }
`

export default globalStyles