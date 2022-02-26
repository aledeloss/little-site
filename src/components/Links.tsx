import React from 'react'

import styled from 'styled-components'
import { theme } from '../styles/variables'
import Link from './Link'
import { linksData } from './linksData'

const Links: React.FC = () => {
  const StyledIcons = styled.section`
    width: 30%;
    display: flex;
    justify-content: space-around;
    align-items: center;
  `

  const color: string = theme.colorPrimary

  return (
    <StyledIcons>
      <Link color={color} iconContent={linksData[0].content} url={linksData[0].url} title={linksData[0].title}/>
      <Link color={color} iconContent={linksData[1].content} url={linksData[1].url} title={linksData[1].title}/>
      <Link color={color} iconContent={linksData[2].content} url={linksData[2].url} title={linksData[2].title}/>
    </StyledIcons>
  )
}

export default Links
