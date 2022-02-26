import React from 'react'
import styled from 'styled-components'
import Links from './components/Links'
import Main from './components/Main'
import { theme } from './styles/variables'

const StyledApp = styled.div`
background-color: ${theme.colorSecondary};
min-height: 100vh;
display: flex;
flex-direction: column;
text-align: center;
align-items: center;
justify-content: center;
color: white;`

function App () {
  return (
    <StyledApp>
      <Main />
      <Links />
    </StyledApp>
  )
}

export default App
