import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

const Logos: React.FC = () => {
  //   const logos = [
  //     {
  //       description: 'gmail',
  //       logo: '',
  //     },
  //   ];
  return (
    <div>
      <FontAwesomeIcon icon={faLinkedin} style={{ color: 'blue' }} />
      <FontAwesomeIcon icon={faGithub} />
      <FontAwesomeIcon icon={faEnvelope} />
    </div>
  )
}

export default Logos
