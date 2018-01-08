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
  margin-top: 20px;

  @media (max-width: 700px) {
    display: flex;
    align-items: center;
    margin-bottom: 20px;
    text-align: left;
  }

  @media (max-width: 450px) {
    flex-wrap: wrap;
  }

  a {
    @media (max-width: 450px) {
      height: 50px;
      overflow: hidden;
    }
  }

  img {
    border-radius: 50%

    @media (max-width: 700px) {
      width: 75px;
      margin-right: 10px;
    }

    @media (max-width: 450px) {
      margin-top: 10px;
    }
  }

  p {
    color: white;
    font-size: 16px;
    width: 100%;
    margin 0;

    @media (min-width: 450px) {
      margin-right: 40px;
    }

    @media (min-width: 700px) {
      margin-right: 0;
      padding: 20px;
      background-color: rgba(255, 255, 255, 0.15);
      font-size: 20px;
    }
  }
`

export default Bio
