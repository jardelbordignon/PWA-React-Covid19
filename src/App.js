import React from 'react'
import { StylesProvider } from '@material-ui/styles'
import { CssBaseline}  from '@material-ui/core'

import Main from './pages/Main'
import GlobalStyles from './commons/styles/global-style'

function App() {
  return (
    <StylesProvider injectFirst>
      <CssBaseline />
      <GlobalStyles />
      <Main />
    </StylesProvider>
  )
}

export default App
