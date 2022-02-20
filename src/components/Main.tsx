import React from 'react'

import styled from 'styled-components'

const Main: React.FC = () => {
  const StyledMain = styled.main`
  width: 100%;
  height: 85vh;
  display: flex;
  align-items: center;
  justify-content: center;
`
  return (
        <StyledMain>
            <p>Welcome to my little site. Enjoy!</p>
        </StyledMain>
  )
}

export default Main
