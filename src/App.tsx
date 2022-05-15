import React, { useState } from 'react'
import styled, { ThemeProvider } from 'styled-components'
import Links from './components/Links'
import Main from './components/Main'
import { breakpoints, darkTheme, lighTheme } from './styles/variables'
import GlobalStyles from './styles/globalStyles'
import { Switch } from './components/Switch'

const StyledApp = styled.div`
  margin: auto;
  min-height: 100vh;
  width: 80vw;
  align-self: center;
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
  justify-content: space-between;
  padding: 2em;

  @media (min-width: ${breakpoints.desktop}) {
    max-width: 60vw;;
  }
`

function App () {
  const [theme, setTheme] = useState('light') // should this be a boolean

  const themeToggler = ():void => {
    setTheme(theme === 'dark' ? 'light' : 'dark')
  }
  return (
    <ThemeProvider theme={theme === 'dark' ? darkTheme : lighTheme}>
      <GlobalStyles />
      <StyledApp>
        <Switch handleClick={themeToggler} theme={theme}/>
        <Main />
        <Links />
      </StyledApp>
    </ThemeProvider>
  )
}

export default App
