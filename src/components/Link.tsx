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
  display: inline-block;

  &:hover, &:focus {
    transform: scale(1.1);
    opacity: 0.6;
    border: solid blue;
  }
`

const StyledPath = styled.path`
  fill: ${props => props.theme.colorSecondary};
`

export const Link: React.FC<ILink> = ({ iconContent, url, title }: ILink) => {
  return (
    <StyledLink tabIndex={0} href={url} target='_blank' data-testid={url} aria-labeledby={title}>
      <svg tabIndex={-1} xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512">
        <title id={title}>{title}</title>
        <StyledPath
          className="envolope-icon"
          d={iconContent}/>
      </svg>
    </StyledLink>
  )
}

export default Link
