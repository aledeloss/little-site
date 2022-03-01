import React, { useState } from 'react'
import styled, { ThemeProvider } from 'styled-components'
import Links from './components/Links'
import Main from './components/Main'
import { darkTheme, lighTheme } from './styles/variables'
import GlobalStyles from './styles/globalStyles'

const StyledApp = styled.div`
min-height: 100vh;
display: flex;
flex-direction: column;
text-align: center;
align-items: center;
justify-content: center;
color: white;`

function App () {
  const [theme, setTheme] = useState('light')

  const themeToggler = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark')
  }
  return (
    <ThemeProvider theme={theme === 'dark' ? darkTheme : lighTheme}>
      <GlobalStyles />
      <StyledApp>
        <button onClick={() => themeToggler()}>Change theme</button>
        <Main />
        <Links />
      </StyledApp>
    </ThemeProvider>
  )
}

export default App
