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
        Written by <strong>Mike herchel</strong> who lives and works in Gainesville FL building useful things.{' '}
        <a href="https://twitter.com/mikeherchel">
          You should follow him on Twitter
        </a>
      </p>
    )
  }
}

export default Bio
