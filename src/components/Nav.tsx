import React from 'react'
import styled from 'styled-components'
import Link from './Link'
import { linksData } from './linksData'

const StyledIcons = styled.ul`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const Nav: React.FC = () => {
  return (
    <StyledIcons>
      <Link {...linksData[0]}/>
      <Link {...linksData[1]}/>
      <Link {...linksData[2]}/>
    </StyledIcons>
  )
}

export default Nav
