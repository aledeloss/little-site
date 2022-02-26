import React from 'react'

import styled from 'styled-components'

const StyledMain = styled.main`
width: 100%;
height: 85vh;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
`

const Main: React.FC = () => {
  return (
        <StyledMain>
            <p>Welcome to my little site.</p>
            <p> Enjoy!</p>
        </StyledMain>
  )
}

export default Main
