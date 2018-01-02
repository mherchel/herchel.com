import React from 'react'

import profilePic from './herchelshead.jpg'

class Bio extends React.Component {
  render() {
    return (
      <p>
        <img
          src={profilePic}
          alt={`Mike herchel`}
        />
        Hi, I'm Mike Herchel, and I use Drupal, JavaScript, and other technologies to kick various asses throughout cyberspace.
      </p>
    )
  }
}

export default Bio
