import React from 'react'
import styled from 'styled-components'

import Logos from './components/Logos'
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
      <Logos />
    </StyledApp>
  )
}

export default App
