import React from 'react'

import styled from 'styled-components'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

const Logos: React.FC = () => {
  const StyledLogos = styled.section`
    width: 30%;
    display: flex;
    justify-content: space-around;
    align-items: center;
  `
  //   const logos = [
  //     {
  //       description: 'gmail',
  //       logo: '',
  //     },
  //   ];
  return (
    <StyledLogos>
      <FontAwesomeIcon icon={faLinkedin}/>
      <FontAwesomeIcon icon={faGithub} />
      <FontAwesomeIcon icon={faEnvelope} />
    </StyledLogos>
  )
}

export default Logos
