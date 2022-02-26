import React from 'react'
import styled from 'styled-components'
import Links from './components/Links'
import Main from './components/Main'

function App () {
  const StyledApp = styled.div`
  background-color: #282c34;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;`

  return (
    <StyledApp>
      <Main />
      <Links />
    </StyledApp>
  )
}

export default App
