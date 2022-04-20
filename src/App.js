import React from 'react'
import QuoteBox from './components/QuoteBox'
import CssBaseline from '@mui/material/CssBaseline'
import { ThemeProvider, createTheme } from '@mui/material/styles'

const theme = createTheme()

const App = () => {
  return (
    <ThemeProvider theme={theme}>
        <CssBaseline/>
        <QuoteBox/>
    </ThemeProvider>    
  )
}

export default App