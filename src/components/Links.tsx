import React from 'react'

import styled from 'styled-components'
// import { darkTheme } from '../styles/variables'
import Link from './Link'
import { linksData } from './linksData'

const StyledIcons = styled.section`
  width: 80%;
  display: flex;
  justify-content: space-around;
  align-items: center;
`

const Links: React.FC = () => {
  return (
    <StyledIcons>
      <Link {...linksData[0]}/>
      <Link {...linksData[1]}/>
      <Link {...linksData[2]}/>
    </StyledIcons>
  )
}

export default Links
