import React from 'react'

import styled from 'styled-components'

interface ILink {
  iconContent: string;
  url: string;
  title: string;
}

const StyledLink = styled.a`
  width: 30px;
  height: 30px;

  &:hover, $:focus {
    transform: scale(1.1);
    opacity: 0.6;
  }
`

const StyledPath = styled.path`
  fill: ${props => props.theme.colorSecondary};
`
const StyledSvg = styled.svg`
  fill: 'red';
${StyledLink}:focus & {
  transform: scale(1.5);
}
`

const Link: React.FC<ILink> = ({ iconContent, url, title }: ILink) => {
  return (
    <StyledLink href={url} target='_blank' data-testid={url}>
      <StyledSvg tabIndex={0} xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512">
        <title>{title}</title>
        <StyledPath
          className="envolope-icon"
          d={iconContent}/>
      </StyledSvg>
    </StyledLink>
  )
}

export default Link
