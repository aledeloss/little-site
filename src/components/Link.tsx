import React from 'react'

import styled from 'styled-components'

interface ILink {
  color: string;
  iconContent: string;
  url: string;
  title: string;
}

const StyledLink = styled.a`
  width: 30px;
  height: 30px;
  
  &:hover {
    opacity: 0.6;
    transform: scale(1.1);
  }
`

const Link: React.FC<ILink> = ({ color, iconContent, url, title }: ILink) => {
  return (
    <StyledLink href={url} target='_blank' data-testid={url}>
      <svg xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512">
        <title>{title}</title>
        <path
          className="envolope-icon"
          fill={color}
          d={iconContent}/>
      </svg>
    </StyledLink>
  )
}

export default Link
