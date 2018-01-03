import React from 'react'
import { css } from 'emotion'
import Link from 'gatsby-link'

class Template extends React.Component {
  render() {
    const { location, children } = this.props
    return (
      <div>
        <header className={headerStyles}>
          <Link to={'/'}>Home</Link>
          <Link to={'/about'}>About</Link>
          <Link to={'/philosophy'}>Philosophy</Link>
          <Link to={'/contact'}>Contact</Link>
        </header>
        {children()}
      </div>
    )
  }
}

const headerStyles = css`
  font-size: 1.5rem;

  a:not(:last-child) {
    margin-right: 10px;
  }
`

Template.propTypes = {
  children: React.PropTypes.func,
  location: React.PropTypes.object,
  route: React.PropTypes.object,
}

export default Template
