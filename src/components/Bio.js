import React from 'react'
import Link from 'gatsby-link'
import { css } from 'emotion'
import profilePic from './herchelshead.jpg'

class Bio extends React.Component {
  render() {
    return (
      <div className={bioStyles}>
        <Link to='/'><img src={profilePic} alt={`Mike herchel`} /></Link>
        <p>
          Hi, I'm Mike Herchel, and I use Drupal, JavaScript, and other technologies to kick various asses throughout cyberspace.
        </p>
      </div>
    )
  }
}

const bioStyles = css`
  img {
    border-radius: 50%
  }

  p {
    padding: 20px;
    background-color: rgba(255, 255, 255, 0.15);
    color: white;
    font-size: 20px;
  }
`

export default Bio
