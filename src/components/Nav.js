import React from 'react'
import Link from 'gatsby-link'
import { css } from 'emotion'

class Nav extends React.Component {
  render() {
    return (
      <nav className={navStyles}>
        <Link to={'/'}>Home</Link>
        <Link to={'/about'}>About</Link>
        <Link to={'/philosophy'}>Philosophy</Link>
        <Link to={'/events'}>Events</Link>
      </nav>
    )
  }
}

const navStyles = css`
  margin: 20px 0;
  font-size: 40px;
  font-weight: bold;

  a {
    display: block;
    color: white;
    text-decoration: none;
  }
`

export default Nav
