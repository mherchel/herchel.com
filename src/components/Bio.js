import React from 'react'
import { css } from 'emotion'
import profilePic from './herchelshead.jpg'

class Bio extends React.Component {
  render() {
    return (
      <p className={bioStyles}>
        <img
          src={profilePic}
          alt={`Mike herchel`}
        />
        Hi, I'm Mike Herchel, and I use Drupal, JavaScript, and other technologies to kick various asses throughout cyberspace.
      </p>
    )
  }
}

const bioStyles = css`
  img {
    border-radius: 50%
  }
`

export default Bio
