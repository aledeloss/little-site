import React from 'react'

import styled from 'styled-components'
import { theme } from '../styles/variables'
import Link from './Link'
import { linksData } from './linksData'

const StyledIcons = styled.section`
  width: 80%;
  display: flex;
  justify-content: space-around;
  align-items: center;
`

const color: string = theme.colorPrimary

const Links: React.FC = () => {
  return (
    <StyledIcons>
      <Link color={color} {...linksData[0]}/>
      <Link color={color} {...linksData[1]}/>
      <Link color={color} {...linksData[2]}/>
    </StyledIcons>
  )
}

export default Links
