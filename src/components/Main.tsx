import React from 'react'

import styled from 'styled-components'

const StyledMain = styled.main`
  height: 85%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  color: ${props => props.theme.colorSecondary};
`

const Main: React.FC = () => {
  return (
        <StyledMain>
            <p>Welcome to my little site.</p>
            <p>Enjoy!</p>
        </StyledMain>
  )
}

export default Main
